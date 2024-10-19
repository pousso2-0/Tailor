import React, { useState, useEffect } from 'react'
import { Container, Row, Col,Tab } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProfilNavLink from '../../components/profils/ProfilNavLink'
import ProfilPersonalInfoForm from '../../components/profils/form/ProfilPersonalInfoForm'
import ProfilChangePasswordForm from '../../components/profils/form/ProfilChangePasswordForm'
import ProfilMesureForm from '../../components/profils/form/ProfilMesureForm'
import ProfilManagerForm from '../../components/profils/form/ProfilManagerForm'
import { useUser } from '../../context/UserContext'



const EditUserProfile = () => {
    const { currentUser: user, setCurrentUser, loading } = useUser();

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <ToastContainer />
            <div className='content-inner'>
                <Container>
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col lg="12">
                                <ProfilNavLink />
                            </Col>
                            <Col lg={12}>
                                <Tab.Content>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" className="fade show">
                                            <ProfilPersonalInfoForm user={user} setUser={setCurrentUser} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="fade show">
                                            <ProfilChangePasswordForm user={user} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className="fade show">
                                            <ProfilMesureForm user={user} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth" className="fade show">
                                            <ProfilManagerForm user={user} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div >
        </>
    );
};

export default EditUserProfile;