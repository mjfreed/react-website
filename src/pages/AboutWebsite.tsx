import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import CircleCILogo from "../assets/circleci-logo.png";
import CloudFrontLogo from "../assets/cloudfront-logo.png";
import CypressLogo from "../assets/cypress-logo.png";
import DockerLogo from "../assets/docker-logo.webp";
import ReactImage from "../assets/logo512.png";
import S3Logo from "../assets/s3-logo.png";
import TestingLibraryLogo from "../assets/testing-library-logo.png";
import { aboutWebsitePreface, dummyText } from "../assets/text/text";
import TypeScript from "../assets/Typescript_logo.png";
import AboutWebsiteCell from "../components/AboutWebsiteCell";

const AboutWebsite: React.FC = () => {
    return (
        <>
            <Segment inverted>
                <Container style={{ padding: "5em", marginTop: "1em" }}>
                    <Header inverted style={{ fontSize: "3em" }}>
                        Preface...
                    </Header>
                    <Container>
                        <p style={{ fontSize: "1.25em" }}>{aboutWebsitePreface}</p>
                    </Container>
                </Container>
            </Segment>
            <Segment vertical>
                <AboutWebsiteCell
                    title="Developed with React and TypeScript"
                    logoOne={TypeScript}
                    logoTwo={ReactImage}
                    blurb={dummyText}
                    link="https://github.com/mjfreed/react-website"
                />
                <AboutWebsiteCell
                    title="Tested with testing-library and cypress.js"
                    logoOne={CypressLogo}
                    logoTwo={TestingLibraryLogo}
                    blurb={dummyText}
                    link="https://github.com/mjfreed/react-website/tree/main/src/components/test"
                />
                <AboutWebsiteCell
                    title="Built and deployed with Docker and CircleCI"
                    logoOne={CircleCILogo}
                    logoTwo={DockerLogo}
                    blurb={dummyText}
                    link="https://github.com/mjfreed/react-website/tree/main/.circleci"
                />
                <AboutWebsiteCell
                    title="Hosted on AWS S3 and served with CloudFront"
                    logoOne={CloudFrontLogo}
                    logoTwo={S3Logo}
                    blurb={dummyText}
                    link="https://github.com/mjfreed/react-website/tree/main/deployment"
                    lastCell
                />
            </Segment>
        </>
    );
};

export default AboutWebsite;
