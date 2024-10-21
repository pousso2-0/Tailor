// import {Col} from "react-bootstrap";
import Card from "../../Card";

import user01 from "../../../assets/images/user/01.jpg";
import user2 from "../../../assets/images/user/02.jpg";
import user3 from "../../../assets/images/user/03.jpg";
import user13 from "../../../assets/images/user/13.jpg";
import user14 from "../../../assets/images/user/14.jpg";
import user15 from "../../../assets/images/user/15.jpg";
import user16 from "../../../assets/images/user/15.jpg";
const SuggestPeople = () => {
  return (


    <>
    <Card>
      <div className="card-header d-flex justify-content-between">
        <div className="header-title">
          <h4 className="card-title text-capitalize">active users</h4>
        </div>
      </div>
      <Card.Body className="pt-0">
        <ul className="list-inline m-0 p-0">
          <li className="d-flex align-items-center gap-3 mb-3">
            <img
              src={user01}
              alt="story-img"
              className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
            />
            <div>
              <h5 className="d-inline-block">Arina Event</h5>
              <span className="profile-status-online"></span>
              <small className="text-capitalize d-block">
                Active
              </small>
            </div>
          </li>
          <li className="d-flex align-items-center gap-3 mb-3">
            <img
              src={user2}
              alt="story-img"
              className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
            />
            <div>
              <h5 className="d-inline-block">Darlene Robertson</h5>
              <span className="profile-status-online"></span>
              <small className="text-capitalize d-block">
                Active
              </small>
            </div>
          </li>
          <li className="d-flex align-items-center gap-3 mb-3">
            <img
              src={user3}
              alt="story-img"
              className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
            />
            <div>
              <h5 className="d-inline-block">Jerome Bell</h5>
              <span className="profile-status-offline"></span>
              <small className="text-capitalize d-block">
                7 hours ago
              </small>
            </div>
          </li>
          <li className="d-flex align-items-center gap-3">
            <img
              src={user13}
              alt="story-img"
              className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
            />
            <div>
              <h5 className="d-inline-block">Arlene McCoy</h5>
              <span className="profile-status-offline"></span>
              <small className="text-capitalize d-block">
                4 days ago
              </small>
            </div>
          </li>
        </ul>
      </Card.Body>
    </Card>

    <div className="fixed-suggestion mb-0 mb-lg-4">
      <Card>
        <div className="card-header d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Suggestions for you</h4>
          </div>
          <small className="fw-500 text-capitalize">See all</small>
        </div>
        <Card.Body className="pt-0">
          <ul className="list-inline m-0 p-0">
            <li className="mb-3">
              <div className="d-flex align-items-center gap-2 justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={user14}
                    alt="story-img"
                    className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                  />
                  <div>
                    <h5>Annette Black</h5>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                    </div>
                    <small className="text-capitalize">
                      Followed by dribbble + 2 more
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-shrink-0 gap-2">
                  <button className="btn btn-primary-subtle p-1 lh-1">
                    <i className="material-symbols-outlined font-size-14">
                      add
                    </i>
                  </button>
                  <button className="btn btn-danger-subtle p-1 lh-1">
                    <i className="material-symbols-outlined font-size-14">
                      close
                    </i>
                  </button>
                </div>
              </div>
            </li>
            <li className="mb-3">
              <div className="d-flex align-items-center gap-2 justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={user15}
                    alt="story-img"
                    className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div>
                        <h5>Christopher Plessis</h5>
                        <small className="text-capitalize">
                          Followed by dribbble + 2 more
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-shrink-0 gap-2">
                  <button className="btn btn-primary-subtle p-1 lh-1">
                    <i className="material-symbols-outlined font-size-14">
                      add
                    </i>
                  </button>
                  <button className="btn btn-danger-subtle p-1 lh-1">
                    <i className="material-symbols-outlined font-size-14">
                      close
                    </i>
                  </button>
                </div>
              </div>
            </li>
            <li className="">
              <div className="d-flex align-items-center gap-2 justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={user16}
                    alt="story-img"
                    className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <h5>Ellyse Perry</h5>
                    </div>
                    <small className="text-capitalize">
                      Followed by dribbble + 2 more
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-shrink-0 gap-2">
                  <button className="btn btn-primary-subtle p-1 lh-1">
                    <i className="material-symbols-outlined font-size-14">
                      add
                    </i>
                  </button>
                  <button className="btn btn-danger-subtle p-1 lh-1">
                    <i className="material-symbols-outlined font-size-14">
                      close
                    </i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  </>
  )
}


export default SuggestPeople;