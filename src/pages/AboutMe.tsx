import React from "react";
import { Container, Grid, Header, Image } from "semantic-ui-react";
import ReactImage from "../assets/logo512.png";
import { dummyText } from "../assets/text/text";

const AboutMe: React.FC = () => {
    return (
        <Grid style={{ marginTop: "7em" }}>
            <Grid.Row columns="equal">
                <Grid.Column>
                    <Header style={{ fontSize: "3em" }} textAlign="center">
                        In the workplace...
                    </Header>
                    <Container text style={{ fontSize: "1.5em" }}>
                        {dummyText}
                    </Container>
                </Grid.Column>
                <Grid.Column
                    verticalAlign="middle"
                    style={{ justifyContent: "center", alignItems: "center", display: "flex" }}
                >
                    <Image src={ReactImage} size="medium" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="equal">
                <Grid.Column
                    verticalAlign="middle"
                    style={{ justifyContent: "center", alignItems: "center", display: "flex" }}
                >
                    <Image src={ReactImage} size="medium" />
                </Grid.Column>
                <Grid.Column>
                    <Header style={{ fontSize: "3em" }} textAlign="center">
                        Outside the workplace...
                    </Header>
                    <Container text style={{ fontSize: "1.5em" }}>
                        {dummyText}
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default AboutMe;
