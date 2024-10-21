import { useState } from "react";
import { Col, Row, Carousel, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Media({ medias }) {
    const [showCarousel, setShowCarousel] = useState(false);
    const [carouselImages, setCarouselImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    function imageOnSlide(number) {
        setActiveIndex(number);
    }

    if (!medias?.length) return null;

    const handleShowCarousel = () => {
        if (medias.length > 3) {
            setCarouselImages(medias.slice(3));
            setShowCarousel(true);
        }
    };

    const handleCloseCarousel = () => setShowCarousel(false);

    return (
        <div className="user-post mt-4">
            {Array.isArray(medias) && medias.length > 1 ? (
                <Row>
                    {medias.slice(0, 3).map((media, index) => (
                        <Col key={media.id} md={4} className="mt-md-0 mt-3 position-relative">
                            <Link
                                to="#"
                                onClick={index === 2 ? handleShowCarousel : () => imageOnSlide(media.id)}
                            >
                                {media.type === 'image/jpeg' ? (
                                    <img
                                        src={media.url}
                                        alt={`Media item ${media.id}`} // Correction ici
                                        className="img-fluid rounded w-100"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src = 'path/to/default-image.jpg';
                                        }}
                                    />
                                ) : (
                                    <video controls className="img-fluid rounded w-100" onError={(e) => {
                                        e.currentTarget.src = 'path/to/default-video.mp4';
                                        e.currentTarget.load();
                                    }}>
                                        <source src={media.url} type="video/mp4" />
                                        Votre navigateur ne supporte pas la balise vidéo.
                                    </video>
                                )}
                            </Link>

                            {index === 2 && medias.length > 3 && (
                                <div className="position-absolute top-0 start-0 badge bg-danger text-white">
                                    +{medias.length - 3}
                                </div>
                            )}
                        </Col>
                    ))}
                </Row>
            ) : (
                <Link to="#" onClick={() => imageOnSlide(medias[0].id)} className="rounded">
                    {medias[0]?.type === 'image/jpeg' ? (
                        <img src={medias[0].url} alt={`Media item ${medias[0].id}`} className="img-fluid rounded w-100" /> // Correction ici
                    ) : (
                        <video controls className="img-fluid rounded w-100">
                            <source src={medias[0].url} type="video/mp4" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    )}
                </Link>
            )}

            <Modal show={showCarousel} onHide={handleCloseCarousel} size="lg">
                <Modal.Body className="pt-4">
                    <Carousel activeIndex={activeIndex} onSelect={setActiveIndex}>
                        {carouselImages.map((media) => (
                            <Carousel.Item key={media.id}>
                                <div className="position-relative">
                                    {media.type === 'image/jpeg' ? (
                                        <img
                                            src={media.url}
                                            alt={`Media item ${media.id}`} // Correction ici
                                            className="d-block w-100"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <video controls className="d-block w-100">
                                            <source src={media.url} type="video/mp4" />
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                    )}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    );
}
