import React from "react";
import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";
import ReactImage from "../assets/logo512.png";
import ExtensisLogo from "../assets/Extensis_logo.jpg";

const Home: React.FC = () => {
    return (
        <Container style={{ marginTop: "7em" }}>
            <Segment vertical>
                <Grid columns="equal" stackable>
                    <Grid.Row verticalAlign="middle">
                        <Grid.Column floated="left">
                            <Header style={{ fontSize: "3em" }}>Hi, I'm Marshall Freed, a Software Engineer</Header>
                        </Grid.Column>
                        <Grid.Column floated="right">
                            <Image size="large" rounded src={ReactImage} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment vertical>
                <Grid celled="internally" columns="equal" stackable>
                    <Grid.Row>
                        <Grid.Column floated="left">
                            <Header as="h1">
                                <Image size="massive" floated="left" src={ExtensisLogo} />
                                Extensis
                                <Header.Subheader>Software Engineer</Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column floated="left">
                            <Header as="h1">
                                <Image size="massive" floated="left" src={ExtensisLogo} />
                                Extensis
                                <Header.Subheader>Software Engineer In Test</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    );
};

export default Home;
