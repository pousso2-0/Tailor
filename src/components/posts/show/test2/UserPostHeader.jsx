export default UserPostHeader = ({ name, timePosted, postText }) => (
    <div className="d-flex align-items-center justify-content-between">
        <div>
            <h6 className="mb-0 d-inline-block">{name}</h6>{" "}
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
                {postText}
            </span>
            <p className="mb-0">{timePosted}</p>
        </div>
        <PostActionsDropdown />
    </div>
);
