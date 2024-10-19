import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import * as SettingSelector from "../../store/setting/selectors";
import { useSelector } from "react-redux";
import login1 from "../../assets/images/login/1.png";
import authService from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

SwiperCore.use([Navigation, Autoplay]);

const SignIn = () => {
  const { setIsAuthenticated, logout } = useAuth();
  const appName = useSelector(SettingSelector.app_name);
  const navigate = useNavigate();
  const location = useLocation();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Supprimer le token quand on est sur la page de connexion
  useEffect(() => {
    authService.logout();

    logout();
    // localStorage.removeItem("token");
  }, [location.pathname]);

  useEffect(() => {
    if (authService.isLoggedIn() && location.pathname !== "/auth/sign-in") {
      navigate("/");
    }
  }, [navigate, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(credentials);
      localStorage.setItem("token", response.token); // Sauvegarder le token après connexion réussie
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      setError(err.message || "Une erreur s'est produite lors de la connexion");
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
                  className="list-inline m-0 p-0"
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                >
                  <ul className="swiper-wrapper list-inline m-0 p-0">
                    <SwiperSlide>
                      <img
                        src={login1}
                        className="signin-img img-fluid mb-5 rounded-3"
                        alt="images"
                      />
                      <h2 className="mb-3 text-white fw-semibold">
                        Connectez-vous et Créez des Liens
                      </h2>
                      <p className="font-size-16 text-white mb-0">
                        Découvrez un espace dédié aux tailleurs et à leurs clients,
                        <br /> où vous pouvez partager vos créations, échanger des conseils et
                        <br /> trouver l'inspiration pour vos projets de couture.
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
                  Bienvenue sur {appName}, une plateforme dédiée aux tailleurs
                  <br /> et à leurs clients pour tisser des liens et partager
                  <br /> passion et créativité dans le monde de la couture.
                </p>

                <Form className="mt-5" onSubmit={handleSubmit}>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <Form.Group className="form-group text-start">
                    <h6 className="form-label fw-bold">
                      Username or Email Address
                    </h6>
                    <Form.Control
                      type="email"
                      name="email"
                      className="form-control mb-0"
                      placeholder="Your Email"
                      value={credentials.email}
                      onChange={handleChange}
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
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <div className="d-flex align-items-center justify-content-between">
                    <Form.Check className="form-check d-inline-block m-0">
                      <Form.Check.Input
                        type="checkbox"
                        className="form-check-input"
                      />
                      <h6 className="form-check-label fw-bold">Remember Me</h6>
                    </Form.Check>
                    <Link to="/auth/recoverpw" className="font-italic">
                      Forgot Password?
                    </Link>
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn btn-primary mt-4 fw-semibold text-uppercase w-100"
                  >
                    Sign in
                  </Button>
                </Form>
                <h6 className="mt-5">
                  Don't Have An Account ?{" "}
                  <Link to="/auth/sign-up">Sign Up</Link>
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignIn;
