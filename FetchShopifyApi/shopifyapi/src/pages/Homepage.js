import React, { useEffect, useContext } from "react";
import { ShopContex } from "../contex/ShopContex";
import { Container, Div, Text, Row, Col } from "atomize";
const Homepage = () => {
  const { fetchAllProducts, products } = useContext(ShopContex);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading.....</div>;
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <Text>{product.title}</Text>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homepage;
