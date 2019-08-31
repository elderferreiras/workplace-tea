import React from 'react';
import {Button, Form} from "react-bootstrap";

const form = () => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea">
                <Form.Label style={{fontSize: '3rem'}}>Ready to spill the tea?</Form.Label>
                <Form.Control as="textarea" rows="3" maxLength={280}/>
            </Form.Group>
            <Button type="submit">Send</Button>
        </Form>
    );
};

export default form;