import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Background from '../../../assets/images/background.png';

const header = () => {
    return (
        <header className="masthead" style={{backgroundImage: `url(${Background})`}}>
            <div className="overlay"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea">
                                    <Form.Label style={{fontSize: '3rem'}}>Ready to spill the tea?</Form.Label>
                                    <Form.Control as="textarea" rows="3" maxLength={280}/>
                                </Form.Group>
                                <Button type="submit">Send</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default header;