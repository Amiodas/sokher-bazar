import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3 className="mb-5">Shop</h3>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container>
          <Row>
            {products.map((product) => (
              <Col lg="3" md="6" key={product.id}>
                <Card style={{ width: "18rem", marginBottom: "40px" }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>
                      <h4>{product.name}</h4>
                    </Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Link to={`/details/${product.id}`}>
                      <Button variant="primary">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Shop;
