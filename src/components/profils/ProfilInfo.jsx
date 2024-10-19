import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import coin from "../../assets/images/gamipress/coin.svg";
import credit from "../../assets/images/gamipress/credit.svg";
import gems from "../../assets/images/gamipress/gems.svg";
import img3 from "../../assets/images/icon/facebook.png";
import img4 from "../../assets/images/icon/twitter.png";
import img5 from "../../assets/images/icon/instagram.png";
import img6 from "../../assets/images/icon/google.png";
import img7 from "../../assets/images/icon/youtube.png";
import img8 from "../../assets/images/icon/linkedin.png";

export default function ProfilInfo({ user }) {
    if(!user)
        return;
    return (
        <Card className="profile-box">
            <Card.Body>
                <Row className="align-items-center item-header-content">
                    <Col lg={4} className="profile-left">
                        <ul className="d-flex align-items-center justify-content-center gap-3 list-inline p-0 m-0 mb-3 flex-wrap">
                            <li className="d-flex align-items-center gap-1">
                                <img
                                    src={coin}
                                    className="img-fluid avatar-24"
                                    alt="coin"
                                    loading="lazy"
                                />
                                <h6 className="font-size-14 fw-semibold">6765 Coins</h6>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <img
                                    src={credit}
                                    className="img-fluid avatar-24"
                                    alt="credit"
                                    loading="lazy"
                                />
                                <h6 className="font-size-14 fw-semibold">
                                    7180 Credits
                                </h6>
                            </li>
                            <li className="d-flex align-items-center gap-1">
                                <img
                                    src={gems}
                                    className="img-fluid avatar-24"
                                    alt="coin"
                                    loading="lazy"
                                />
                                <h6 className="font-size-14 fw-semibold">100 Gems</h6>
                            </li>
                        </ul>
                        <div className="social-links">
                            <ul className="social-data-block d-flex align-items-center justify-content-center list-inline p-0 m-0">
                                <li className="text-center pe-3">
                                    <Link to="#">
                                        <img
                                            src={img3}
                                            className="img-fluid rounded"
                                            alt="facebook"
                                            loading="lazy"
                                        />
                                    </Link>
                                </li>
                                <li className="text-center pe-3">
                                    <Link to="#">
                                        <img
                                            src={img4}
                                            className="img-fluid rounded"
                                            alt="Twitter"
                                            loading="lazy"
                                        />
                                    </Link>
                                </li>
                                <li className="text-center pe-3">
                                    <Link to="#">
                                        <img
                                            src={img5}
                                            className="img-fluid rounded"
                                            alt="Instagram"
                                            loading="lazy"
                                        />
                                    </Link>
                                </li>
                                <li className="text-center pe-3">
                                    <Link to="#">
                                        <img
                                            src={img6}
                                            className="img-fluid rounded"
                                            alt="Google plus"
                                            loading="lazy"
                                        />
                                    </Link>
                                </li>
                                <li className="text-center pe-3">
                                    <Link to="#">
                                        <img
                                            src={img7}
                                            className="img-fluid rounded"
                                            alt="You tube"
                                            loading="lazy"
                                        />
                                    </Link>
                                </li>
                                <li className="text-center md-pe-3 pe-0">
                                    <Link to="#">
                                        <img
                                            src={img8}
                                            className="img-fluid rounded"
                                            alt="linkedin"
                                            loading="lazy"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} className="text-center profile-center">
                        <div className="header-avatar position-relative d-inline-block">
                            <span className="change-profile-image bg-primary rounded-pill">
                                <span className="material-symbols-outlined text-white font-size-16">
                                    photo_camera
                                </span>
                            </span>
                            <img
                                src={user?.profilePicture}
                                alt="user"
                                className="avatar-150 border border-4 border-white rounded-3"
                            />
                            <span className="badge bg-success fw-500 letter-spacing-1 chat-status">
                                online
                            </span>
                        </div>
                        <h5 className="d-flex align-items-center justify-content-center gap-1 mb-2">
                            {user.name}{" "}
                            <span className="badge  bg-primary rounded-pill material-symbols-outlined font-size-14 p-0 custom-done">
                                done
                            </span>
                        </h5>
                        <ul className="d-flex align-items-center justify-content-center gap-3 list-inline p-0 m-0">
                            <li className="d-flex align-items-center gap-1">
                                <h6 className="material-symbols-outlined font-size-14">
                                    location_on
                                </h6>
                                <span className="font-size-14 text-uppercase fw-500">
                                    {user.location}
                                </span>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} className="profile-right">
                        <ul className="user-meta list-inline p-0 d-flex align-items-center justify-content-center">
                            <li>
                                <h5>{user.postsCount ?? 0}</h5>Posts
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
}