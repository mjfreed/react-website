import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import ExtensisLogo from "../assets/Extensis_logo.jpg";
import TEUChainLogo from "../assets/TEUChain.jpg";
import CloudPractitioner from "../assets/cloud_practitioner.png";
import AssociateDeveloper from "../assets/associate_developer.png";
import WLogo from "../assets/WLogo.png";
import ReactImage from "../assets/logo512.png";
import HomepageCell from "../components/HomepageCell";

const Home: React.FC = () => {
    return (
        <>
            <Segment vertical style={{ marginTop: "3em" }}>
                <Grid container stackable columns="equal">
                    <Grid.Row verticalAlign="middle">
                        <Grid.Column floated="left">
                            <Header style={{ fontSize: "3em" }}>Hi! I'm Marshall Freed, a Software Engineer</Header>
                        </Grid.Column>
                        <Grid.Column floated="right">
                            <Image size="large" rounded src={ReactImage} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment vertical>
                <Grid celled="internally" columns={2}>
                    <Grid.Row>
                        <HomepageCell
                            image={ExtensisLogo}
                            header="Extensis"
                            subheader={"Software Engineer\t\t"}
                            dateRange="Nov 2019 - Present"
                        />
                        <HomepageCell
                            image={ExtensisLogo}
                            header="Extensis"
                            subheader="Software Engineer In Test"
                            dateRange="Apr 2019 - Nov 2019"
                        />
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment vertical>
                <HomepageCell
                    image={TEUChainLogo}
                    header="TEUChain"
                    subheader="Software Development Engineer - Contract"
                    dateRange="Aug 2018 - Feb 2019"
                    single
                />
            </Segment>

            <Segment vertical>
                <Grid celled="internally" columns={2}>
                    <Grid.Row>
                        <HomepageCell
                            image={CloudPractitioner}
                            header="AWS Certified Cloud Practitioner"
                            subheader="Link to Badge"
                            dateRange="Jun 2020 - Jun 2024"
                        />
                        <HomepageCell
                            image={AssociateDeveloper}
                            header="AWS Certified Associate Developer"
                            subheader="Link to Badge"
                            dateRange="Sep 2021 - Sep 2024"
                        />
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment vertical>
                <HomepageCell
                    image={WLogo}
                    header="University of Washington, Tacoma"
                    subheader="B.S. in Computer Science"
                    dateRange="Jun 2016 - Jun 2018"
                    single
                />
            </Segment>
        </>
    );
};

export default Home;
