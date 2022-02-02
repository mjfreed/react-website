import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

interface IAboutMeTextCellProps {
    header: string;
    bodyText: string;
}

const AboutMeTextCell: React.FC<IAboutMeTextCellProps> = ({ header, bodyText }) => {
    return (
        <Grid.Column>
            <Header style={{ fontSize: "3em" }} textAlign="center">
                {header}
            </Header>
            <Container text>{bodyText}</Container>
        </Grid.Column>
    );
};

export default AboutMeTextCell;
