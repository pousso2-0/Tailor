import Validator from "../../../utilities/Validator";
import React, { useState } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap'


export default function ProfilMesureForm({ user }) {
    const validation = new Validator();
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    return (
        <Card>
            <Card.Header className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Email and SMS</h4>
                </div>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="form-group row align-items-center">
                        <div className="col-md-3" htmlFor="emailnotification">Email Notification:</div>
                        <Form.Check className="col-md-9 form-check form-switch">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked11" defaultChecked />
                            <Form.Check.Label className="form-check-label" htmlFor="flexSwitchCheckChecked11">Checked switch checkbox input</Form.Check.Label>
                        </Form.Check>
                    </Form.Group>
                    <Form.Group className="form-group row align-items-center">
                        <div className="col-md-3" htmlFor="smsnotification">SMS Notification:</div>
                        <Form.Check className="col-md-9 form-check form-switch">
                            <Form.Check.Input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked12" defaultChecked />
                            <Form.Check.Label className="form-check-label" htmlFor="flexSwitchCheckChecked12">Checked switch checkbox input</Form.Check.Label>
                        </Form.Check>
                    </Form.Group>
                    <Form.Group className="form-group row align-items-center">
                        <div className="col-md-3" htmlFor="npass">When To Email</div>
                        <Col md="9">
                            <Form.Check className="form-check">
                                <Form.Check.Input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault12" />
                                <Form.Check.Label className="form-check-label" htmlFor="flexCheckDefault12">
                                    You have new notifications.
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="form-check d-block">
                                <Form.Check.Input className="form-check-input" type="checkbox" defaultValue="" id="email02" />
                                <Form.Check.Label className="form-check-label" htmlFor="email02">You're sent a direct message</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="form-check d-block">
                                <Form.Check.Input type="checkbox" className="form-check-input" id="email03" defaultChecked />
                                <Form.Check.Label className="form-check-label" htmlFor="email03">Someone adds you as a connection</Form.Check.Label>
                            </Form.Check>
                        </Col>
                    </Form.Group>
                    <Form.Group className="form-group row align-items-center">
                        <div className="col-md-3" htmlFor="npass">When To Escalate Emails</div>
                        <Col md="9">
                            <Form.Check className="form-check">
                                <Form.Check.Input className="form-check-input" type="checkbox" defaultValue="" id="email04" />
                                <Form.Check.Label className="form-check-label" htmlFor="email04">
                                    Upon new order.
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="form-check d-block">
                                <Form.Check.Input className="form-check-input" type="checkbox" defaultValue="" id="email05" />
                                <Form.Check.Label className="form-check-label" htmlFor="email05">New membership approval</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="form-check d-block">
                                <Form.Check.Input type="checkbox" className="form-check-input" id="email06" defaultChecked />
                                <Form.Check.Label className="form-check-label" htmlFor="email06">Member registration</Form.Check.Label>
                            </Form.Check>
                        </Col>
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary me-2">Submit</Button>{" "}
                    <button type="reset" className="btn btn-danger-subtle">Cancel</button>
                </Form>
            </Card.Body>
        </Card>
    );
}