import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CategoryList = ({ categories, onCategorySelect, loading, error }) => {
    return (
        <div>
            <Card>
                <Card.Header className="border-bottom text-center">
                    <h2 className="text-dark font-weight-bold">Catégories</h2>
                </Card.Header>
            </Card>
            <Row className="mt-3">
                {loading ? (
                    <Col className="text-center">
                        <p>Chargement des catégories...</p>
                    </Col>
                ) : error ? (
                    <Col className="text-danger text-center">
                        <p>{error}</p>
                    </Col>
                ) : (
                    categories.map((category) => (
                        <Col sm="6" md="4" key={category.id} className="mb-4">
                            <Card className="card-block card-stretch card-height product" onClick={() => onCategorySelect(category)}>
                                <Card.Body style={{ cursor: 'pointer' }}>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="img-fluid"
                                        style={{ maxHeight: '200px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
                                    />
                                    <div className="product-description text-center mt-3">
                                        <h5 className="mb-1 text-decoration-none text-dark">{category.name}</h5>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </div>
    );
};

export default CategoryList;
