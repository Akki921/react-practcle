import React, { useEffect, useContext } from "react";
import { ShopContext } from "../contex/ShopContext";
import { Container, Div, Text, Row, Col } from "atomize";
import { Link } from "react-router-dom";
const Homepage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading.....</div>;
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} size="3">
            <Link to={`/product/${product.id}`}>
              <Div p="2rem">
                <Div
                  h="20rem"
                  bgImg={product.images[0].src}
                  bgSize="cover"
                  bgPos="center center"
                />
                <Text>{product.title}</Text>
                <Text>{product.variants[0].price}</Text>
              </Div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homepage;
