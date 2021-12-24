import React from "react";
import { Container, Grid, GridColumn, Header, Icon, Image, List } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

interface IHomepageCellProps {
    image: string;
    header: string;
    subheader: string;
    dateRange: string;
}

const HomepageCell: React.FC<IHomepageCellProps> = ({ image, header, subheader, dateRange }: IHomepageCellProps) => {
    return (
        <Grid.Column>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width="4">
                        <Image src={image} width="60px" height="60px" floated="right" />
                    </Grid.Column>
                    <Grid.Column width="6" textAlign="center">
                        <Header as="h1">
                            {header}
                            <Header.Subheader>{subheader}</Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width="4" />
                </Grid.Row>
                <Grid.Row centered>
                    <Header as="h1">
                        <div>
                            <Icon size="small" name="calendar alternate" disabled />
                            <text style={{ fontSize: "0.6em", color: "rgba(0,0,0,.6)" }}>{dateRange}</text>
                        </div>
                    </Header>
                </Grid.Row>
            </Grid>
        </Grid.Column>
    );
};

export default HomepageCell;
