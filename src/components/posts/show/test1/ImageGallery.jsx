const ImageGallery = ({ images, onImageClick }) => {
    const firstRow = images.slice(0, 3);
    const secondRow = images.slice(3, 5);
    const remainingCount = images.length - 5;

    return (
        <div className="user-post mt-4">
            <Row>
                {firstRow.map((image, index) => (
                    <Col md={4} className={index > 0 ? "mt-md-0 mt-3" : ""} key={index}>
                        <Link to="#" onClick={() => onImageClick(index + 1)}>
                            <img src={image} alt={`post${index + 1}`} className="img-fluid rounded w-100" />
                        </Link>
                    </Col>
                ))}
            </Row>
            {secondRow.length > 0 && (
                <Row className="mt-3">
                    {secondRow.map((image, index) => (
                        <Col md={6} className={index > 0 ? "mt-md-0 mt-3" : ""} key={index}>
                            <div className={index === 1 && remainingCount > 0 ? "post-overlay-box h-100 rounded" : ""}>
                                <img
                                    src={image}
                                    alt={`post${index + 4}`}
                                    className="img-fluid rounded w-100 h-100 object-cover"
                                />
                                {index === 1 && remainingCount > 0 && (
                                    <Link
                                        to="#"
                                        className="rounded font-size-18"
                                        onClick={() => onImageClick(5)}
                                    >
                                        +{remainingCount}
                                    </Link>
                                )}
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default ImageGallery;