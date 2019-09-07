import React from 'react';
import { Button, Form, Row } from "react-bootstrap";

const form = (props) => {
    const disabled = props.tea.valid? '':'disabled';

    return (
        <Form onSubmit={props.submit}>
            <Form.Group controlId="exampleForm.ControlTextarea" className="mb-0">
                <Form.Label style={{fontSize: '3rem'}} className="tea-label">Ready to spill the tea?</Form.Label>
                <Form.Control
                    as="textarea"
                    name="tea"
                    rows="3"
                    maxLength={250}
                    value={props.tea.content}
                    style={{fontSize: '1.2rem'}}
                    onChange={props.changed}/>
            </Form.Group>
            <p className="mb-2 mt-0 ml-0 mr-0 text-left" style={{fontSize: '12px'}}>Hate speech is not tolerated.</p>
            <Row>
                <div className="text-left col-6">
                    <span>{props.tea.count}/250</span>
                </div>

                <div className="text-right col-6">
                    <Button type="submit" disabled={disabled}>Send</Button>
                </div>
            </Row>
        </Form>
    );
};

export default form;