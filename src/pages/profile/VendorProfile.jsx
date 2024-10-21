import React, { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import ProfileHeader from "../../components/profils/ProfileHeader";
import { useUser } from "../../context/UserContext";
import pageBgImg from "../../assets/images/user/user-1.jpg"
import ProfilAboutCard from "../../components/profils/ProfilAboutCard";
import ProfilFriendCard from "../../components/profils/ProfilFriendCard";
import ProfilPostCard from "../../components/profils/ProfilPostCard";
import ProfilInfo from "../../components/profils/ProfilInfo";


const VendorProfile = () => {
    const { currentUser: user, setCurrentUser, loading } = useUser();

    useEffect(() => {
        document.body.classList.add("profile-page");
        return () => {
            document.body.classList.remove("profile-page");
        };
    });

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const photo = user?.photoCouverture ?? pageBgImg;

    return (
        <>
            <div id="content-page" className="content-inner">
                <Container className="position-relative p-0">
                    <div
                        className="header-cover-img"
                        style={{
                            backgroundImage: `url(${photo})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                </Container>
                <Container>
                    <Row>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Col sm={12}>
                                <ProfilInfo user={user} />
                                <ProfileHeader />
                            </Col>
                            <Col sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <ProfilPostCard user={user} setUser={setCurrentUser} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <ProfilAboutCard user={user} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <ProfilFriendCard user={user} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default VendorProfile;
