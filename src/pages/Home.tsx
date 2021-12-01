import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import ExtensisLogo from "../assets/Extensis_logo.jpg";
import ReactImage from "../assets/logo512.png";
import HomepageCell from "../components/HomepageCell";

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
                        <HomepageCell
                            image={ExtensisLogo}
                            header="Extensis"
                            subheader="Software Engineer"
                            dateRange="Nov 2019 - Present"
                            bulletPoints={[
                                "Something something something something Something something something something",
                                "Something something something something",
                                "Something something",
                                "Something something something something something something something something",
                            ]}
                        />
                        <HomepageCell
                            image={ExtensisLogo}
                            header="Extensis"
                            subheader="Software Engineer In Test"
                            dateRange="Apr 2019 - Nov 2019"
                            bulletPoints={[
                                "Something something something something Something something something something",
                                "Something something something something",
                                "Something something",
                                "Something something something something something something something something",
                            ]}
                        />
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment vertical></Segment>
        </>
    );
};

export default Home;
