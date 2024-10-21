import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import ProfileHeader from "../../components/profils/ProfileHeader";
import { useUser } from "../../context/UserContext";
// import pageBgImg from "../../assets/images/user/user-1.jpg";
import ProfilAboutCard from "../../components/profils/ProfilAboutCard";
import ProfilFriendCard from "../../components/profils/ProfilFriendCard";
import ProfilPostCard from "../../components/profils/ProfilPostCard";
import ProfilInfo from "../../components/profils/ProfilInfo";
import { userService } from "../../services/userService";

const UserProfile = () => {
  const { currentUser: user, setCurrentUser, loading } = useUser();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // end modal

  const [credit, setCredit] = useState(null);
  const [currentCredit, setCurrentCredit] = useState(0);

  useEffect(() => {
    if (user) {
      setCurrentCredit(user.credits);
    }
  }, [user]);

  const handleBuyCredit = (newCredit) => {
    if (user && user.credits !== undefined) {
      const prevAmountCredit = parseInt(user.credits, 10);
      const totalCredit = prevAmountCredit + parseInt(newCredit.credit, 10);

      userService
        .buyCredits(totalCredit)
        .then((response) => {
          console.log(response.data);
          setCurrentCredit(response.data.credits);
          console.log("Crédits mis à jour avec succès");
          handleClose();
        })
        .catch((error) => {
          console.error("Erreur lors de l'achat des crédits", error);
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (credit > 0) {
      const updateCredit = { credit };
      handleBuyCredit(updateCredit);
      setCredit(null);
    } else {
      console.error("Veuillez entrer un crédit valide");
    }
  };

  const handleChange = (event) => {
    setCredit(event.target.value);
  };

  useEffect(() => {
    document.body.classList.add("profile-page");
    return () => {
      document.body.classList.remove("profile-page");
    };
  });

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const photo = user?.photoCouverture;

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
                <ProfilInfo
                user={user}
                credit={credit}
                currentCredit={currentCredit}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                show={show}
                handleShow={handleShow}
                />
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
};

export default UserProfile;
