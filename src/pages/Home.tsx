import React from "react";
import { Container, Grid, Header, Image, List, Segment } from "semantic-ui-react";
import ReactImage from "../assets/logo512.png";
import ExtensisLogo from "../assets/Extensis_logo.jpg";

const Home: React.FC = () => {
    return (
        <>
            <Segment vertical style={{ marginTop: "3em" }}>
                <Grid container stackable columns="equal">
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
                            <Grid>
                                <Grid.Row style={{ paddingBottom: 0, paddingLeft: "1em" }}>
                                    <Header as="h1" style={{ width: "100%" }}>
                                        <Image size="massive" floated="left" src={ExtensisLogo} />
                                        Extensis
                                        <Header.Subheader>Software Engineer</Header.Subheader>
                                    </Header>
                                </Grid.Row>
                                <Grid.Row style={{ paddingTop: 0 }}>
                                    <Container text>
                                        <List bulleted>
                                            <List.Item>
                                                Something something something something Something something something
                                                something
                                            </List.Item>
                                            <List.Item>Something something something something</List.Item>
                                            <List.Item>Something something something something</List.Item>
                                            <List.Item>Something something something something</List.Item>
                                        </List>
                                    </Container>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column floated="left">
                            <Grid>
                                <Grid.Row style={{ paddingBottom: 0, paddingLeft: "1em" }}>
                                    <Header as="h1" style={{ width: "100%" }}>
                                        <Image size="massive" floated="left" src={ExtensisLogo} />
                                        Extensis
                                        <Header.Subheader>Software Engineer In Test</Header.Subheader>
                                    </Header>
                                </Grid.Row>
                                <Grid.Row style={{ paddingTop: 0 }}>
                                    <Container text>
                                        <List bulleted>
                                            <List.Item>
                                                Something something something something Something something something
                                                something
                                            </List.Item>
                                            <List.Item>Something something something something</List.Item>
                                            <List.Item>Something something something something</List.Item>
                                            <List.Item>Something something something something</List.Item>
                                        </List>
                                    </Container>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment vertical></Segment>
        </>
    );
};

export default Home;
