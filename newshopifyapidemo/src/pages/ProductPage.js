import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShopContext } from "../contex/ShopContext";
import { Text, Div, Row, Col, Container } from "atomize";

const ProductPage = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product } =
    useContext(ShopContext);
  // const [product, setProduct] = useState(null)
  // async function fetchData() {
  //     const fetchedProduct = await fetchProductWithId(id)
  //     setProduct(fetchedProduct)
  // }

  useEffect(() => {
    fetchProductWithId(id);

    // fetchData()
    return () => {
      // setProduct(null)
    };
  }, [fetchProductWithId, id]);

  if (!product.title) return <div>is loading</div>;
  return (
    <Container>
      <Row>
        {/* <Col>
          <Div
            bgImg={product.images[0].src}
            bgSize="cover"
            bgPos="center center"
            h="40rem"
          />
        </Col> */}
        <Col>{id}</Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
