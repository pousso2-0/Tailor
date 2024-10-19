import Validator from "../../../utilities/Validator";
import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'


export default function ProfilManagerForm({user}) {
    const validation = new Validator();
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    return (
        <Card>
            <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Manage Contact</h4>
                </div>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="cno" className="form-label">Contact Number:</Form.Label>
                        <Form.Control type="text" className="form-control" id="cno" defaultValue={formData.phone} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="email" className="form-label">Email:</Form.Label>
                        <Form.Control type="text" className="form-control" id="email" defaultValue={formData.email} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="url" className="form-label">Facebook:</Form.Label>
                        <Form.Control type="text" className="form-control" id="url" defaultValue={formData.location} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="url" className="form-label">Facebook:</Form.Label>
                        <Form.Control type="text" className="form-control" id="url" defaultValue={formData.location} />
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary me-2">Submit</Button>{" "}
                    <button type="reset" className="btn btn-danger-subtle">Cancel</button>
                </Form>
            </Card.Body>
        </Card>
    )
}