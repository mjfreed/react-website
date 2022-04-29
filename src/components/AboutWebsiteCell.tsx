import React from "react";
import { Button, Container, Divider, Header, Image } from "semantic-ui-react";

interface IAboutWebisteCellProps {
    title: string;
    logoOne: string;
    logoTwo: string;
    blurb: string;
    link: string;
    lastCell?: boolean;
}

const AboutWebsiteCell: React.FC<IAboutWebisteCellProps> = ({ title, logoOne, logoTwo, blurb, link, lastCell }) => {
    return (
        <Container>
            <Header style={{ fontSize: "2.5em" }}>
                {title}
                <Image floated="right" src={logoOne} />
                <Image floated="right" src={logoTwo} />
            </Header>
            <p style={{ fontSize: "1.25em" }}>{blurb}</p>
            <Button icon="github" content="Source" color="black" href={link} target="_blank" />
            {!lastCell ? <Divider /> : null}
        </Container>
    );
};

export default AboutWebsiteCell;
