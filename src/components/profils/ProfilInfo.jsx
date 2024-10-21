import { Col, Row, Modal, Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import coin from "../../assets/images/gamipress/coin.svg";
import { cardStyle, titleStyle, subtitleStyle, inputContainerStyle, labelStyle, inputWrapperStyle, inputStyle, dollarSignStyle, buttonStyle } from "./style/FormStyle"

export default function ProfilInfo({
  user,
  currentCredit,
  handleChange,
  handleSubmit,
  handleClose,
  show,
  handleShow,
  credit,
}) {

  if (!user) return;
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
                <h6 className="font-size-14 fw-semibold">{currentCredit}</h6>
              </li>
              <Button
                type="button"
                onClick={handleShow}
                variant="primary"
                className="d-block w-[100px] "
              >
                Upgrade
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                centered
                // id="custom-post-modal"
                className={cardStyle}
              >
                <div className="modal-header d-flex justify-content-between">
                  <div  className="d-flex gap-2 align-items-center">

                    <h2 style={titleStyle}>Purchase Credit</h2>
                    <img
                      src={coin}
                      className="avatar-24 mb-2"
                      alt="coin"
                      loading="lazy"
                    />
                  </div>
                  <Link to="#" className="lh-1" onClick={handleClose}>
                    <span className="material-symbols-outlined">close</span>
                  </Link>
                </div>
                <Modal.Body>
                  <div style={cardStyle}>
                    <p style={subtitleStyle}>
                      Enter the amount of credit you wish to purchase
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div style={inputContainerStyle}>
                        <label htmlFor="amount" style={labelStyle}>
                          Amount
                        </label>
                        <div style={inputWrapperStyle}>
                          <span style={dollarSignStyle}>XOF</span>
                          <input
                            type="number"
                            style={inputStyle}
                            id="creditAmount"
                            placeholder="Enter amount"
                            value={credit}
                            onChange={handleChange}
                            min="0"
                            required
                          />
                        </div>
                      </div>
                      <button type="submit" style={buttonStyle}>
                        Purchase Credit
                      </button>
                    </form>
                  </div>
                </Modal.Body>
              </Modal>
            </ul>

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
