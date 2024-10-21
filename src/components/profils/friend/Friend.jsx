import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export default function Friend({ user }) {
  if (!user) return;
  return (
    <div className="col-md-6 col-lg-6 mb-3">
      <div className="iq-friendlist-block">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="#">
              <img
                loading="lazy"
                src={user.profilePicture}
                alt="profile-img"
                className="img-fluid"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            </Link>
            <div className="friend-info ms-3">
              <h5>{user.name}</h5>
            </div>
          </div>
          <div className="card-header-toolbar d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                <i className="material-symbols-outlined me-2">
                  done
                </i>
                Friend
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right">
                <Dropdown.Item href="#">
                  Unfollow
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Unfriend
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Block
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}