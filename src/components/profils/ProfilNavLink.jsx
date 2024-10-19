import React from 'react'
import { Card,  Nav } from 'react-bootstrap'

export default function ProfilNavLink() {
    return (
        <Card>
            <Card.Body className="p-0">
                <div>
                    <Nav as="ul" variant="pills" className="iq-edit-profile row mb-0">
                        <Nav.Item as="li" className="col-md-3 p-0">
                            <Nav.Link eventKey="first" role="button">
                                Personal Information
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="col-md-3 p-0">
                            <Nav.Link eventKey="second" role="button">
                                Change Password
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="col-md-3 p-0">
                            <Nav.Link eventKey="third" role="button">
                                Email and SMS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="col-md-3 p-0">
                            <Nav.Link eventKey="fourth" role="button">
                                Manage Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Card.Body>
        </Card>
    );
}