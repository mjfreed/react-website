import React from "react";
import { Grid, Image } from "semantic-ui-react";

interface IAboutMePhotoCell {
    imageSrc: string;
}

const AboutMePhotoCell: React.FC<IAboutMePhotoCell> = ({ imageSrc }) => {
    return (
        <Grid.Column verticalAlign="middle" style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
            <Image src={imageSrc} size="medium" />
        </Grid.Column>
    );
};

export default AboutMePhotoCell;
