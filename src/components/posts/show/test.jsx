export const post1 = () => (
    <Col sm={12} className="special-post">
        <Card className=" card-block card-stretch card-height">
            <Card.Body>
                <div className="user-post-data">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="me-3 flex-shrik-0">
                            <img
                                className="border border-2 rounded-circle user-post-profile"
                                src={user01}
                                alt=""
                            />
                        </div>
                        <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6 className="mb-0 d-inline-block">
                                        Anna Sthesia
                                    </h6>{" "}
                                    <span className="d-inline-block text-primary">
                                        <svg
                                            className="align-text-bottom"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.8457 0H4.34822C1.73547 0 0.0974121 1.84995 0.0974121 4.46789V11.5321C0.0974121 14.1501 1.72768 16 4.34822 16H11.8449C14.4663 16 16.0974 14.1501 16.0974 11.5321V4.46789C16.0974 1.84995 14.4663 0 11.8457 0Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M5.09741 7.99978L7.09797 9.9995L11.0974 6.00006"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>{" "}
                                    <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                        posted an update
                                    </span>
                                    <p className="mb-0">2 minutes ago</p>
                                </div>

                                <div className="card-post-toolbar">
                                    <Dropdown>
                                        <Dropdown.Toggle id="post-option" as="span" >
                                            <span className="material-symbols-outlined">more_horiz</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="m-0 p-0">
                                            <Dropdown.Item className=" p-3" to="#">
                                                <div className="d-flex align-items-top">
                                                    <span className="material-symbols-outlined">
                                                        save
                                                    </span>
                                                    <div className="data ms-2">
                                                        <h6>Save Post</h6>
                                                        <p className="mb-0">
                                                            Add this to your saved items
                                                        </p>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="p-3" to="#">
                                                <div className="d-flex align-items-top">
                                                    <span className="material-symbols-outlined">
                                                        cancel
                                                    </span>
                                                    <div className="data ms-2">
                                                        <h6>Hide Post</h6>
                                                        <p className="mb-0">
                                                            See fewer posts like this.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item className=" p-3" to="#">
                                                <div className="d-flex align-items-top">
                                                    <span className="material-symbols-outlined">
                                                        person_remove
                                                    </span>
                                                    <div className="data ms-2">
                                                        <h6>Unfollow User</h6>
                                                        <p className="mb-0">
                                                            Stop seeing posts but stay
                                                            friends.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item className=" p-3" to="#">
                                                <div className="d-flex align-items-top">
                                                    <span className="material-symbols-outlined">
                                                        notifications
                                                    </span>
                                                    <div className="data ms-2">
                                                        <h6>Notifications</h6>
                                                        <p className="mb-0">
                                                            Turn on notifications for this
                                                            post
                                                        </p>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-post mt-4">
                    <Link
                        onClick={() => imageOnSlide(1)}
                        to="#"
                        className="rounded"
                    >
                        <img
                            src={user5}
                            alt="post-images"
                            className="img-fluid rounded w-100"
                            loading="lazy"
                        />
                    </Link>
                </div>
                <div className="post-meta-likes mt-4">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <ul className="list-inline m-0 p-0 post-user-liked-list">
                            <li>
                                <img
                                    src={user01}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                />
                            </li>{" "}
                            <li>
                                <img
                                    src={user2}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                />
                            </li>{" "}
                            <li>
                                <img
                                    src={user3}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                />
                            </li>{" "}
                            <li>
                                <img
                                    src={user4}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                />
                            </li>{" "}
                        </ul>
                        <div className="d-inline-flex align-items-center gap-1">
                            <h6 className="m-0 font-size-14">Aliana Molex</h6>
                            <span
                                className="text-capitalize font-size-14 fw-medium"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#likemodal"
                            >
                                and 208 others liked this
                            </span>
                        </div>
                    </div>
                </div>
                <div className="comment-area mt-4 pt-4 border-top">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                            <div className="like-data">
                                <div className="dropdown">
                                    <span
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        role="button"
                                    >
                                        <span className="material-symbols-outlined align-text-top font-size-20">
                                            thumb_up
                                        </span>{" "}
                                        <span className="fw-medium">140 Likes</span>
                                    </span>
                                    <div className="dropdown-menu py-2 shadow">
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Like</Tooltip>}
                                            className="ms-2 me-2"
                                        >
                                            <img
                                                src={icon1}
                                                className="img-fluid me-2"
                                                alt=""
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Love</Tooltip>}
                                            className="me-2"
                                        >
                                            <img
                                                src={icon2}
                                                className="img-fluid me-2"
                                                alt=""
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Happy</Tooltip>}
                                            className="me-2"
                                        >
                                            <img
                                                src={icon3}
                                                className="img-fluid me-2"
                                                alt=""
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>HaHa</Tooltip>}
                                            className="me-2"
                                        >
                                            <img
                                                src={icon4}
                                                className="img-fluid me-2"
                                                alt=""
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Think</Tooltip>}
                                            className="me-2"
                                        >
                                            <img
                                                src={icon5}
                                                className="img-fluid me-2"
                                                alt=""
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Sad</Tooltip>}
                                            className="me-2"
                                        >
                                            <img
                                                src={icon6}
                                                className="img-fluid me-2"
                                                alt=""
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Lovely</Tooltip>}
                                            className="me-2"
                                        >
                                            <img
                                                src={icon7}
                                                className="img-fluid me-2"
                                                alt=""
                                            />
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
                            <div
                                className="total-comment-block"
                                type="button"
                                aria-controls="commentcollapes"
                                aria-expanded={open}
                                onClick={() => setOpen(!open)}
                            >
                                <span className="material-symbols-outlined align-text-top font-size-20">
                                    comment
                                </span>{" "}
                                <span className="fw-medium">20 Comment</span>
                            </div>

                            <div className="share-block d-flex align-items-center feather-icon">
                                <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#share-btn"
                                    onClick={() => setModalShow(true)}
                                    aria-controls="share-btn"
                                    className="d-flex align-items-center"
                                >
                                    <span className="material-symbols-outlined align-text-top font-size-20">
                                        share
                                    </span>
                                    <span className="ms-1 fw-medium">
                                        99 Share
                                    </span>
                                </Link>
                            </div>
                            <ShareOffcanvasNew
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>

                    <Collapse in={open}>
                        <div id="commentcollapes" className="border-top mt-4 pt-4">
                            <ul className="list-inline m-o p-0 comment-list">
                                <li className="mb-3">
                                    <div className="comment-list-block">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="comment-list-user-img flex-shrink-0">
                                                <img
                                                    src={user6}
                                                    alt="userimg"
                                                    className="avatar-48 rounded-circle img-fluid"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="comment-list-user-data">
                                                <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                    <h6 className="m-0">Bob Frapples</h6>
                                                    <span className="d-inline-block text-primary">
                                                        <svg
                                                            className="align-text-bottom"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17"
                                                            height="17"
                                                            viewBox="0 0 17 17"
                                                            fill="none"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                                fill="currentColor"
                                                            />
                                                            <path
                                                                d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="fw-medium small text-capitalize">
                                                        3 min ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list-user-comment">
                                            <div className="comment-list-comment">
                                                "Just stumbled upon this post and it's
                                                giving me all the feels! 🙌"
                                            </div>
                                            <div className="comment-list-action mt-2">
                                                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2">
                                                    <li>
                                                        <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                                            <div className="like-data">
                                                                <div className="dropdown">
                                                                    <span
                                                                        className="dropdown-toggle"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        role="button"
                                                                    >
                                                                        <span className="material-symbols-outlined align-text-top font-size-18">
                                                                            thumb_up
                                                                        </span>{" "}
                                                                        <span className="fw-medium small">
                                                                            Likes
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span
                                                            className="fw-medium small"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#subcomment-collapse1"
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls="collapseExample"
                                                        >
                                                            Reply
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div
                                                    className="add-comment-form-block collapse mt-3"
                                                    id="subcomment-collapse1"
                                                >
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={user1}
                                                                alt="userimg"
                                                                className="avatar-48 rounded-circle img-fluid"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="add-comment-form">
                                                            <form>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Write a Comment..."
                                                                />
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-primary font-size-12 text-capitalize px-5"
                                                                >
                                                                    post
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="add-comment-form-block">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={user1}
                                            alt="userimg"
                                            className="avatar-48 rounded-circle img-fluid"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="add-comment-form">
                                        <form>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Write a Comment..."
                                            />
                                            <button
                                                type="submit"
                                                className="btn btn-primary font-size-12 text-capitalize px-5"
                                            >
                                                post
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </Card.Body>
        </Card>
    </Col>
);


export const comment = () => (
    <div className="comment-area mt-4 pt-4 border-top">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                <div className="like-data">
                    <div className="dropdown">
                        <span
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="button"
                        >
                            <span className="material-symbols-outlined align-text-top font-size-20">
                                thumb_up
                            </span>{" "}
                            <span className="fw-medium">140 Likes</span>
                        </span>
                        <div className="dropdown-menu py-2 shadow">
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Like</Tooltip>}
                                className="ms-2 me-2"
                            >
                                <img
                                    src={icon1}
                                    className="img-fluid me-2"
                                    alt=""
                                />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Love</Tooltip>}
                                className="me-2"
                            >
                                <img
                                    src={icon2}
                                    className="img-fluid me-2"
                                    alt=""
                                />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Happy</Tooltip>}
                                className="me-2"
                            >
                                <img
                                    src={icon3}
                                    className="img-fluid me-2"
                                    alt=""
                                />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>HaHa</Tooltip>}
                                className="me-2"
                            >
                                <img
                                    src={icon4}
                                    className="img-fluid me-2"
                                    alt=""
                                />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Think</Tooltip>}
                                className="me-2"
                            >
                                <img
                                    src={icon5}
                                    className="img-fluid me-2"
                                    alt=""
                                />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Sad</Tooltip>}
                                className="me-2"
                            >
                                <img
                                    src={icon6}
                                    className="img-fluid me-2"
                                    alt=""
                                />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Lovely</Tooltip>}
                                className="me-2"
                            >
                                <img
                                    src={icon7}
                                    className="img-fluid me-2"
                                    alt=""
                                />
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center gap-3 flex-shrink-0">
                <div
                    className="total-comment-block"
                    type="button"
                    aria-controls="commentcollapes"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <span className="material-symbols-outlined align-text-top font-size-20">
                        comment
                    </span>{" "}
                    <span className="fw-medium">20 Comment</span>
                </div>

                <div className="share-block d-flex align-items-center feather-icon">
                    <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#share-btn"
                        onClick={() => setModalShow(true)}
                        aria-controls="share-btn"
                        className="d-flex align-items-center"
                    >
                        <span className="material-symbols-outlined align-text-top font-size-20">
                            share
                        </span>
                        <span className="ms-1 fw-medium">
                            99 Share
                        </span>
                    </Link>
                </div>
                <ShareOffcanvasNew
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>

        <Collapse in={open}>
            <div id="commentcollapes" className="border-top mt-4 pt-4">
                <ul className="list-inline m-o p-0 comment-list">
                    <li className="mb-3">
                        <div className="comment-list-block">
                            <div className="d-flex align-items-center gap-3">
                                <div className="comment-list-user-img flex-shrink-0">
                                    <img
                                        src={user6}
                                        alt="userimg"
                                        className="avatar-48 rounded-circle img-fluid"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="comment-list-user-data">
                                    <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                        <h6 className="m-0">Bob Frapples</h6>
                                        <span className="d-inline-block text-primary">
                                            <svg
                                                className="align-text-bottom"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <span className="fw-medium small text-capitalize">
                                            3 min ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-list-user-comment">
                                <div className="comment-list-comment">
                                    "Just stumbled upon this post and it's
                                    giving me all the feels! 🙌"
                                </div>
                                <div className="comment-list-action mt-2">
                                    <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2">
                                        <li>
                                            <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                                <div className="like-data">
                                                    <div className="dropdown">
                                                        <span
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            role="button"
                                                        >
                                                            <span className="material-symbols-outlined align-text-top font-size-18">
                                                                thumb_up
                                                            </span>{" "}
                                                            <span className="fw-medium small">
                                                                Likes
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <span
                                                className="fw-medium small"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#subcomment-collapse1"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseExample"
                                            >
                                                Reply
                                            </span>
                                        </li>
                                    </ul>
                                    <div
                                        className="add-comment-form-block collapse mt-3"
                                        id="subcomment-collapse1"
                                    >
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={user1}
                                                    alt="userimg"
                                                    className="avatar-48 rounded-circle img-fluid"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="add-comment-form">
                                                <form>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Write a Comment..."
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary font-size-12 text-capitalize px-5"
                                                    >
                                                        post
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="add-comment-form-block">
                    <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0">
                            <img
                                src={user1}
                                alt="userimg"
                                className="avatar-48 rounded-circle img-fluid"
                                loading="lazy"
                            />
                        </div>
                        <div className="add-comment-form">
                            <form>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Write a Comment..."
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary font-size-12 text-capitalize px-5"
                                >
                                    post
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Collapse>
    </div>
);