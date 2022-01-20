import React, { ReactElement } from "react";
import { Grid, Header, Icon, Image } from "semantic-ui-react";

interface IHomepageCellProps {
    image: string;
    header: string;
    subheader: string | ReactElement;
    dateRange: string;
    single?: boolean;
}

const HomepageCell: React.FC<IHomepageCellProps> = ({
    image,
    header,
    subheader,
    dateRange,
    single,
}: IHomepageCellProps) => {
    return (
        <Grid.Column style={{ padding: 14 }}>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width="4">
                        <Image
                            src={image}
                            width="60px"
                            height="auto"
                            floated="right"
                            data-testid="homepagecell-image"
                        />
                    </Grid.Column>
                    <Grid.Column width={single ? 4 : 6} textAlign="center">
                        <Header as="h1" data-testid="homepagecell-header">
                            {header}
                            <Header.Subheader data-testid="homepagecell-subheader">{subheader}</Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width="4" />
                </Grid.Row>
                <Grid.Row centered>
                    <Header as="h1" data-testid="homepagecell-date-header">
                        <div>
                            <Icon size="small" name="calendar alternate" disabled />
                            <span
                                data-testid="homepagecell-date-range"
                                style={{ fontSize: "0.6em", color: "rgba(0,0,0,.6)" }}
                            >
                                {dateRange}
                            </span>
                        </div>
                    </Header>
                </Grid.Row>
            </Grid>
        </Grid.Column>
    );
};

export default HomepageCell;
