import { Card, Nav, Tab } from "react-bootstrap";
import ListFriend from "./friend/ListFriend";

export default function ProfilFriendCard({ user }) {

    return (
        <Card>
            <Card.Body>
                <h2>Friends</h2>
                <div className="friend-list-tab mt-2">
                    <Nav
                        variant="pills"
                        as="ul"
                        className=" d-flex align-items-center justify-content-left item-list-tabs  p-0 mb-4"
                    >
                        <Nav.Item>
                            <Nav.Link to="#pill-home" eventKey="home-town">
                                Followers
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#pill-following" eventKey="following" className="active">
                                Following
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="home-town">
                            <ListFriend users={user?.followedBy} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="following">
                            <ListFriend users={user?.following} />
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Card.Body>
        </Card>
    );
}