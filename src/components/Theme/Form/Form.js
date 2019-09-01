import React from 'react';
import {Button, Form} from "react-bootstrap";

const form = (props) => {
    return (
        <Form onSubmit={props.submit}>
            <Form.Group controlId="exampleForm.ControlTextarea">
                <Form.Label style={{fontSize: '3rem'}} className="tea-label">Ready to spill the tea?</Form.Label>
                <Form.Control
                    as="textarea"
                    name="tea"
                    rows="3"
                    maxLength={280}
                    value={props.tea.content}
                    style={{fontSize: '1.2rem'}}
                    onChange={props.changed}/>
            </Form.Group>
            <Button type="submit">Send</Button>
        </Form>
    );
};

export default form;