import { Card, Nav } from "react-bootstrap";

export default function ProfileHeader() {
    return (
        <Card>
            <Card.Body className="p-0">
                <div className="user-tabing item-list-tabs">
                    <Nav
                        as="ul"
                        variant="pills"
                        className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0 rounded"
                    >
                        <Nav.Item as="li" className=" col-12 col-sm-3">
                            <Nav.Link
                                href="#pills-timeline-tab"
                                eventKey="first"
                                role="button"
                                className=" d-flex flex-md-column align-items-center flex-row justify-content-center gap-2"
                            >
                                <span className="icon rounded-3">
                                    <span className="material-symbols-outlined">
                                        calendar_month
                                    </span>
                                </span>
                                <p className="mb-0 mt-0 mt-md-3">Timeline</p>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="col-12 col-sm-3">
                            <Nav.Link
                                href="#pills-about-tab"
                                eventKey="second"
                                role="button"
                                className="d-flex flex-md-column align-items-center flex-row justify-content-center gap-2"
                            >
                                <span className="icon rounded-3">
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                </span>{" "}
                                <p className="mb-0 mt-0 mt-md-3">About</p>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className=" col-12 col-sm-3 ">
                            <Nav.Link
                                href="#pills-friends-tab"
                                eventKey="third"
                                role="button"
                                className="d-flex flex-md-column align-items-center flex-row justify-content-center gap-2"
                            >
                                <span className="icon rounded-3">
                                    <span className="material-symbols-outlined">
                                        group
                                    </span>
                                </span>
                                <p className="mb-0 mt-0 mt-md-3">Friends</p>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Card.Body>
        </Card>
    )
}
