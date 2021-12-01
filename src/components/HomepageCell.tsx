import React from "react";
import { Container, Grid, Header, Icon, Image, List } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

interface IHomepageCellProps {
    image: string;
    header: string;
    subheader: string;
    dateRange: string;
    bulletPoints: string[];
}

const HomepageCell: React.FC<IHomepageCellProps> = ({
    image,
    header,
    subheader,
    dateRange,
    bulletPoints,
}: IHomepageCellProps) => {
    return (
        <Grid.Column floated="left">
            <Grid>
                <Grid.Row style={{ paddingBottom: 0, paddingLeft: "1em" }}>
                    <Header as="h1" style={{ width: "100%" }}>
                        <Image size="massive" floated="left" src={image} />
                        <Container fluid>
                            {header}
                            <div style={{ float: "right", paddingRight: "1em" }}>
                                <Icon size="small" name="calendar alternate" disabled />
                                <text style={{ fontSize: "0.6em", color: "rgba(0,0,0,.6)" }}>{dateRange}</text>
                            </div>
                        </Container>
                        <Header.Subheader>{subheader}</Header.Subheader>
                    </Header>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: 0 }}>
                    <Container text>
                        <List bulleted>
                            {bulletPoints.map((bp, idx) => {
                                return <List.Item key={`${header}-${idx}-${uuid()}`}>{bp}</List.Item>;
                            })}
                        </List>
                    </Container>
                </Grid.Row>
            </Grid>
        </Grid.Column>
    );
};

export default HomepageCell;
