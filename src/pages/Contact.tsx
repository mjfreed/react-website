import React from "react";
import { Button, Container, Form, Grid, Header, Image, Input, Segment } from "semantic-ui-react";
import MainImage from "../assets/Main.jpg";

const Contact: React.FC = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Grid container stackable centered verticalAlign="middle" style={{ marginTop: "10em" }}>
                <Grid.Row columns="equal">
                    <Grid.Column>
                        <Header style={{ fontSize: "3em" }}>Reach Out!</Header>
                        <Header as="h1">Send me a message...</Header>
                        <Form>
                            <Form.Group style={{ display: "block" }}>
                                <Form.Input label="Your email" placeholder="email@example.com" />
                                <Form.Input label="Subject" placeholder="We want to hire you!" />
                                <Form.TextArea
                                    rows={15}
                                    label="Message"
                                    placeholder="You look like such a nice and competent guy, we'd love to have you!"
                                />
                            </Form.Group>
                        </Form>
                        <Button icon="linkedin" content="LinkedIn" size="large" color="linkedin"></Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={MainImage} size="massive" rounded />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default Contact;
