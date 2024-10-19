import React from 'react';
import { Row, Col, Link } from 'react-bootstrap';

const ImageGallery = ({ images, onClick }) => {
    // Définir le nombre d'images par ligne
    const imagesPerRow = 3;

    // Créer un tableau de lignes d'images
    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
        rows.push(images.slice(i, i + imagesPerRow));
    }

    return (
        <div className="user-post mt-4">
            {rows.map((rowImages, rowIndex) => (
                <Row key={rowIndex}>
                    {rowImages.map((img, index) => (
                        <Col md={12 / imagesPerRow} key={index}>
                            <Link to="#" onClick={() => onClick(i + index + 1)}>
                                <img
                                    src={img}
                                    alt={`post${i + index + 1}`}
                                    className="img-fluid rounded w-100"
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
};

export default ImageGallery;
