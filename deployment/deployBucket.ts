import { AWSError, CloudFormation } from "aws-sdk";
import fs from "fs";
import path from "path";

const cf: CloudFormation = new CloudFormation({ region: "us-west-2" });
const stackName: string = "mfreed-website-bucket";

/**
 * Gets specified CloudFormation stack if exists
 * @returns CloudFormation.Stack | undefined
 */
async function describeStack(): Promise<CloudFormation.Stack | undefined> {
    try {
        const output: CloudFormation.DescribeStacksOutput = await cf.describeStacks({ StackName: stackName }).promise();
        return output.Stacks?.[0];
    } catch (err: unknown) {
        if ((err as AWSError).message.endsWith("does not exist")) {
            return undefined;
        }

        throw new Error(`Error describing stack: ${err}`);
    }
}

/**
 * Checks for an existing CloudFormation stack
 * @returns boolean
 */
async function isStackExisting(): Promise<boolean> {
    const stack: CloudFormation.Stack | undefined = await describeStack();
    return stack !== undefined;
}

/**
 * Deploys CloudFormation stack in yml file
 */
async function deployStack(): Promise<void> {
    console.log("Deploying CloudFormation stack - mfreed-website-bucket...");

    const template: string = fs.readFileSync(path.resolve(__dirname, "bucket.cf.yml"), { encoding: "utf8" });
    const deployParams: CloudFormation.CreateStackInput = {
        StackName: stackName,
        TemplateBody: template,
    };

    try {
        if (await isStackExisting()) {
            console.log("Updating existing CloudFormation stack...");
            await cf.updateStack(deployParams).promise();
        } else {
            console.log("Creating new CloudFormation stack...");
            deployParams.OnFailure = "ROLLBACK";
            await cf.createStack(deployParams).promise();
        }

        console.log("Polling for CloudFormation stack deployment...");
        await pollUntilComplete();
    } catch (err: unknown) {
        if ((err as AWSError).message.includes("No updates are to be performed")) {
            console.log("No updates to stack needed");
        } else {
            console.error(`Error deploying cloudformation stack, err=${err}`);
        }
    }
}

/**
 * Polls the CloudFormation stack for completion or failure of deployment
 */
async function pollUntilComplete(): Promise<void> {
    const bucketStack: CloudFormation.Stack | undefined = await describeStack();

    if (bucketStack?.StackStatus === "CREATE_COMPLETE") {
        console.log("CloudFormation stack completed");
    } else if (bucketStack?.StackStatus.includes("ROLLBACK")) {
        throw new Error("CloudFormation stack Rolling back... Check AWS console for events");
    } else {
        process.stdout.write(".");
        setTimeout(() => pollUntilComplete(), 4000);
    }
}

deployStack();
