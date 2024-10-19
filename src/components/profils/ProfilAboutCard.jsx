import { Card, Col, Nav, Row, Tab } from "react-bootstrap";


export default function ProfilAboutCard({user}) {
    const userData = ((user) => {
        if (!user) return [];

        return [
            { title: 'Name:', data: user.name ?? 'Not provided' },
            { title: 'Email:', data: user.email ?? 'Not provided' },
            { title: 'Phone:', data: user.phone ?? 'Not provided' },
            { title: 'Gender:', data: user.gender ?? 'Not provided' },
            { title: 'Location:', data: user.location ?? 'Not provided' },
            { title: 'Bio:', data: user.bio ?? 'No bio available' },
            { title: 'Account Type:', data: user.type ?? 'Not specified' },
            { title: 'Followers:', data: user.followersCount?.toString() ?? '0' },
            { title: 'Following:', data: user.followingCount?.toString() ?? '0' },
            { title: 'Posts:', data: user.postCount?.toString() ?? '0' },
            { title: 'Skills:', data: user.skills?.join(', ') ?? 'None specified' },
            { title: 'Account Privacy:', data: user.isPrivate ? 'Private' : 'Public' },
            { title: 'Notifications:', data: user.notificationsEnabled ? 'Enabled' : 'Disabled' },
            { title: 'Reports:', data: user.reportCount?.toString() ?? '0' },
        ];
    })(user);

    const linkData = [
        {
            title: "Website:",
            data: "www.bootstrap.com",
        },
        {
            title: "Social Link:",
            data: "www.bootstrap.com",
        },
    ]
    return (
        <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="about1"
        >
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Nav variant="pills" className=" basic-info-items list-inline d-block p-0 m-0">
                                <Nav.Item>
                                    <Nav.Link to="#" eventKey="about1">
                                        Contact and Basic Info
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8} className=" ps-4">
                    <Card>
                        <Card.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey="about1">
                                    <h4>Personal Info</h4>
                                    <hr />
                                    <div className="table-responsive">
                                        <table className="table profile-table">
                                            <tbody>
                                                {userData.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td><h6>{item.title}</h6></td>
                                                            <td><p className="mb-0">{item.data}</p></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <h4 className="mt-2">
                                        Websites and Social Links
                                    </h4>
                                    <hr />
                                    <div className="table-responsive">
                                        <table className="table profile-table">
                                            <tbody>
                                                {linkData.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td><h6>{item.title}</h6></td>
                                                            <td><p className="mb-0">{item.data}</p></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Tab.Container>
    )
}