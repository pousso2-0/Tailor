import Validator from "../../../utilities/Validator";
import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default function ProfilChangePasswordForm({user}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const passwordData = Object.fromEntries(formData.entries());
        // onUpdate(passwordData);
    };
    return (
        <Card>
            <Card.Header className="d-flex justify-content-between">
                <div className="iq-header-title">
                    <h4 className="card-title">Change Password</h4>
                </div>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="cpass" className="form-label">Current Password:</Form.Label>
                        <Link to="/auth/recoverpw" className="float-end">Forgot Password</Link>
                        <Form.Control type="Password" className="form-control" id="cpass" defaultValue="" />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="npass" className="form-label">New Password:</Form.Label>
                        <Form.Control type="Password" className="form-control" id="npass" defaultValue="" />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="vpass" className="form-label">Verify Password:</Form.Label>
                        <Form.Control type="Password" className="form-control" id="vpass" defaultValue="" />
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary me-2">Submit</Button>{" "}
                    <button type="reset" className="btn btn-danger-subtle">Cancel</button>
                </Form>
            </Card.Body>
        </Card>
    );
}