import React from "react";
import { Container, Header, Segment, Image, Grid, Divider } from "semantic-ui-react";
import ReactImage from "../assets/logo512.png";
import TypeScript from "../assets/Typescript_logo.png";
import CypressLogo from "../assets/cypress-logo.png";
import TestingLibraryLogo from "../assets/testing-library-logo.png";
import { aboutWebsitePreface, dummyText } from "../assets/text/text";

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
                <Container>
                    <Header style={{ fontSize: "2.5em" }}>
                        Developed with React and TypeScript
                        <Image floated="right" src={TypeScript} />
                        <Image floated="right" src={ReactImage} />
                    </Header>
                    <p style={{ fontSize: "1.25em" }}>{dummyText}</p>
                    <Divider />
                </Container>
                <Container>
                    <Header style={{ fontSize: "2.5em" }}>
                        Tested with testing-library and cypress.js
                        <Image floated="right" src={CypressLogo} />
                        <Image floated="right" src={TestingLibraryLogo} />
                    </Header>
                    <p style={{ fontSize: "1.25em" }}>{dummyText}</p>
                    <Divider />
                </Container>
                <Container>
                    <Header style={{ fontSize: "2.5em" }}>Built and deployed with CircleCI</Header>
                    <p style={{ fontSize: "1.25em" }}>{dummyText}</p>
                    <Divider />
                </Container>
                <Container>
                    <Header style={{ fontSize: "2.5em" }}>Hosted on AWS S3 and served with CloudFront</Header>
                    <p style={{ fontSize: "1.25em" }}>{dummyText}</p>
                    <Divider />
                </Container>
            </Segment>
        </>
    );
};

export default AboutWebsite;
