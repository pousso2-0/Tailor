import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {OnlineDot} from "../presences/OnlineDot";

const ArticleList = ({ stores, selectedCategory = null, onArticleClick, quantities }) => {
    const filteredStores = stores.map(store => ({
        ...store,
        articles: selectedCategory
            ? store.articles.filter(item => item.category?.name === selectedCategory)
            : store.articles,
    }));

    const hasArticles = filteredStores.some(store => store.articles.length > 0);

    return (
        <div className="mt-4">
            <Card>
                <Card.Header className="border-bottom text-center">
                    <h2 className="text-dark font-weight-bold">
                        {selectedCategory ? `Articles dans la catégorie: ${selectedCategory}` : 'Tous les articles'}
                    </h2>
                </Card.Header>
            </Card>
            <Row className="mt-3">
                {hasArticles ? (
                    filteredStores.flatMap(store =>
                        (store.articles || []).map(item => (
                            <Col sm="6" md="4" lg="3" key={`${store.id}-${item.id}`}>
                                <Card
                                    className="card-block card-stretch card-height product cursor-pointer"
                                    onClick={() => onArticleClick(item, store)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Card.Body>
                                        <div className="d-flex align-items-center justify-content-between pb-3">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    className="img-fluid rounded-circle avatar-30"
                                                    src={store.user?.profilePicture || '/default-avatar.jpg'}
                                                    alt=""
                                                />
                                                <div className="ms-2">
                                                    <p className="mb-0 line-height">Posté par</p>
                                                    <h6>{store.user?.name}</h6>
                                                    {/* Utilisation de OnlineDot pour afficher le statut en ligne */}
                                                    <OnlineDot userId={store.user?.id} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image-block position-relative">
                                            <img
                                                src={item.image || '/default-product.jpg'}
                                                className="img-fluid w-100 rounded"
                                                alt="product-img"
                                            />
                                            <h6 className="price">${item.price}</h6>
                                        </div>
                                        <div className="product-description mt-3">
                                            <div className="mb-1">{item.name}</div>
                                            <p className="category text-primary ps-3 mb-0 position-relative">
                                                {item.category?.name}
                                            </p>
                                            <p className="mb-0">Magasin: {store.name}</p>
                                            <p className="mb-0">Stock: {item.stockCount}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )
                ) : (
                    <Col>
                        <p>Aucun article disponible {selectedCategory && `dans cette catégorie`}.</p>
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default ArticleList;