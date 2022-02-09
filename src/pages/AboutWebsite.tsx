import React from "react";
import { Container, Header, Segment, Image, Grid } from "semantic-ui-react";
import ReactImage from "../assets/logo512.png";
import { dummyText } from "../assets/text/text";

const AboutWebsite: React.FC = () => {
    return (
        <>
            <Segment vertical style={{ marginTop: "3em" }}>
                <Grid>
                    <Grid.Row>
                        <Container textAlign="center">
                            <Header style={{ fontSize: "2.5em" }}>
                                <Image src={ReactImage} />
                                This website was developed with React
                            </Header>
                        </Container>
                    </Grid.Row>
                    <Grid.Row>
                        <Container textAlign="center">{dummyText}</Container>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical>
                <Grid>
                    <Grid.Row>
                        <Container textAlign="center">
                            <Header style={{ fontSize: "2.5em" }}>
                                <Image src={ReactImage} />
                                This website was developed with React
                            </Header>
                        </Container>
                    </Grid.Row>
                    <Grid.Row>
                        <Container textAlign="center">{dummyText}</Container>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    );
};

export default AboutWebsite;
