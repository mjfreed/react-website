import React from "react";
import { Container, Header, Segment, Image, Grid, Divider } from "semantic-ui-react";
import ReactImage from "../assets/logo512.png";
import TypeScript from "../assets/Typescript_logo.png";
import { dummyText } from "../assets/text/text";

const AboutWebsite: React.FC = () => {
    return (
        <>
            <Segment inverted>
                <Container text>
                    <Header inverted style={{ fontSize: "3em", marginTop: "3em" }}>
                        Preface...
                    </Header>
                </Container>
            </Segment>
            <Segment vertical>
                <Container text>
                    <Header style={{ fontSize: "2.5em" }}>Developed with React and TypeScript</Header>
                    <p style={{ fontSize: "1.25em" }}>{dummyText}</p>

                    <Divider />
                </Container>
            </Segment>
        </>
    );
};

export default AboutWebsite;
