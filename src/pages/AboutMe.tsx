import React from "react";
import { Grid } from "semantic-ui-react";
import ReactImage from "../assets/logo512.png";
import { outsideWorkplaceBlurb, workplaceBlurb } from "../assets/text/text";
import AboutMePhotoCell from "../components/AboutMePhotoCell";
import AboutMeTextCell from "../components/AboutMeTextCell";

const AboutMe: React.FC = () => {
    return (
        <Grid style={{ marginTop: "3em" }}>
            <Grid.Row columns="equal">
                <AboutMeTextCell
                    data-testid="in-the-workplace"
                    header="In the workplace..."
                    bodyText={workplaceBlurb}
                />
                <AboutMePhotoCell data-testid="in-workplace-photo" imageSrc={ReactImage} />
            </Grid.Row>
            <Grid.Row columns="equal">
                <AboutMePhotoCell data-testid="outside-workplace-photo" imageSrc={ReactImage} />
                <AboutMeTextCell
                    data-testid="outside-the-workplace"
                    header="Outside the workplace..."
                    bodyText={outsideWorkplaceBlurb}
                />
            </Grid.Row>
        </Grid>
    );
};

export default AboutMe;
