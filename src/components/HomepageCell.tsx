import React from "react";
import { Container, Grid, Header, Icon, Image, List } from "semantic-ui-react";
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
            <Container fluid>
                <Grid>
                    <Grid.Row style={{ justifyContent: "center", paddingBottom: 0 }}>
                        <Header as="h1" style={{ width: "10em" }} textAlign="center">
                            <Image size="massive" floated="left" src={image} />
                            {header}
                            <Header.Subheader>{subheader}</Header.Subheader>
                        </Header>
                    </Grid.Row>
                    <Grid.Row style={{ justifyContent: "center", paddingTop: 0 }}>
                        <Header as="h1">
                            <div>
                                <Icon size="small" name="calendar alternate" disabled />
                                <text style={{ fontSize: "0.6em", color: "rgba(0,0,0,.6)" }}>{dateRange}</text>
                            </div>
                        </Header>
                    </Grid.Row>
                </Grid>
            </Container>
        </Grid.Column>
    );
};

export default HomepageCell;
