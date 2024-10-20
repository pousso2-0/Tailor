import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Media({ medias }) {
    const [imageController, setImageController] = useState({ toggler: false, slide: 1 });

    function imageOnSlide(number) {
        setImageController({ toggler: !imageController.toggler, slide: number });
    }

    if(!medias?.length)return;

    return (
        <div className="user-post mt-4">
            {
                Array.isArray(medias) && medias.length > 1 ? (
                    <Row>
                        {medias.map((media) => (
                            <Col key={media.id} md={4} className="mt-md-0 mt-3">
                                <Link to="#" onClick={() => imageOnSlide(media.id)}>
                                    {media.type === 'image/jpeg' ? (
                                        <img src={media.url} className="img-fluid rounded w-100" />
                                    ) : (
                                        <video controls className="img-fluid rounded w-100">
                                            <source src={media.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </Link>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <Link to="#" onClick={() => imageOnSlide(10)} className="rounded">
                        {medias[0]?.type === 'image/jpeg' ? (
                            <img src={medias[0].url} className="img-fluid rounded w-100" />
                        ) : (
                            <video controls className="img-fluid rounded w-100">
                                <source src={medias[0].url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </Link>

                )
            }
        </div>

    );
}
