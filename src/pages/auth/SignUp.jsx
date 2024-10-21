import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import login1 from "../../assets/images/login/1.png";
import login2 from "../../assets/images/login/2.png";
import login3 from "../../assets/images/login/3.png";

import * as SettingSelector from "../../store/setting/selectors";
import { useSelector } from "react-redux";

import authService from "../../services/authService";

SwiperCore.use([Navigation, Autoplay]);

const SignUp = () => {
  const appName = useSelector(SettingSelector.app_name);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.acceptTerms) {
      setError("You must accept the Terms and Conditions");
      return;
    }

    try {
      const response = await authService.register({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        // type: formData.type // Ajout du type
      });
      console.log("User registered successfully", response);
      navigate("/");
    } catch (err) {
      setError(err.message || "An error occurred during registration");
    }
  };

  return (
    <>
      <section className="sign-in-page">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="overflow-hidden position-relative">
              <div className="bg-primary w-100 h-100 position-absolute top-0 bottom-0 start-0 end-0"></div>
              <div className="container-inside z-1">
                <div className="main-circle circle-small"></div>
                <div className="main-circle circle-medium"></div>
                <div className="main-circle circle-large"></div>
                <div className="main-circle circle-xlarge"></div>
                <div className="main-circle circle-xxlarge"></div>
              </div>
              <div className="sign-in-detail container-inside-top">
                <Swiper
                  className="list-inline m-0 p-0 "
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                >
                  <ul className="swiper-wrapper list-inline m-0 p-0 ">
                    <SwiperSlide>
                      <img
                        src={login1}
                        className="signin-img img-fluid mb-5 rounded-3"
                        alt="images"
                      />
                      <h2 className="mb-3 text-white fw-semibold">
                        Power UP Your Friendship
                      </h2>
                      <p className="font-size-16 text-white mb-0">
                        It is a long established fact that a reader will be
                        <br /> distracted by the readable content.
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={login2}
                        className="signin-img img-fluid mb-5 rounded-3"
                        alt="images"
                      />
                      <h2 className="mb-3 text-white fw-semibold">
                        Connect with the world
                      </h2>
                      <p className="font-size-16 text-white mb-0">
                        It is a long established fact that a reader will be
                        <br /> distracted by the readable content.
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={login3}
                        className="signin-img img-fluid mb-5 rounded-3"
                        alt="images"
                      />
                      <h2 className="mb-3 text-white fw-semibold">
                        Together Is better
                      </h2>
                      <p className="font-size-16 text-white mb-0">
                        It is a long established fact that a reader will be
                        <br /> distracted by the readable content.
                      </p>
                    </SwiperSlide>
                  </ul>
                </Swiper>
              </div>
            </Col>
            <Col md={6}>
              <div className="sign-in-from text-center">
                <Link
                  to="/"
                  className="d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <h2 className="logo-title" data-setting="app_name">
                    {appName}
                  </h2>
                </Link>
                <p className="mt-3 font-size-16">
                  Welcome to {appName}, a platform to connect with
                  <br /> the social world
                </p>
                {error && <p className="text-danger">{error}</p>}
                <Form className="mt-5" onSubmit={handleSubmit}>
                  <Form.Group className="form-group text-start">
                    <h6 className="form-label fw-bold">Your Full Name</h6>
                    <Form.Control
                      type="text"
                      name="fullName"
                      className="form-control mb-0"
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="form-group text-start">
                    <h6 className="form-label fw-bold">Email Address</h6>
                    <Form.Control
                      type="email"
                      name="email"
                      className="form-control mb-0"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="form-group text-start">
                    <h6 className="form-label fw-bold">Your Password</h6>
                    <Form.Control
                      type="password"
                      name="password"
                      className="form-control mb-0"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-flex align-items-center justify-content-between">
                    <Form.Check className="form-check d-inline-block m-0">
                      <Form.Check.Input
                        type="checkbox"
                        name="acceptTerms"
                        className="form-check-input"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        required
                      />
                      <h6 className="form-check-label fw-500 font-size-14">
                        I accept{" "}
                        <Link className="fw-light ms-1" to="/dashboard/extrapages/terms-of-service">
                          Terms and Conditions
                        </Link>
                      </h6>
                    </Form.Check>
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn btn-primary mt-4 fw-semibold text-uppercase w-100"
                  >
                    Sign Up
                  </Button>
                  <h6 className="mt-5">
                    Already Have An Account ?{" "}
                    <Link to={"/auth/sign-in"}>Login</Link>
                  </h6>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignUp;