import React, { Component } from "react";
import Client from "shopify-buy"; //js-buy-sdk

const ShopContext = React.createContext();
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "metiz-trannie.myshopify.com",
  storefrontAccessToken: "babc519d235c0e51cd577185d3e99833",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: "test",
  };

  componentDidMount() {
    this.createCheckout();
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    //console.log(checkout);
    this.setState({
      checkout: checkout,
    });
  };

  addItemtoCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({
      checkout: checkout,
    });
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({
      products: products,
    });
  };

  fetchProductWithid = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({
      product: product,
    });
  };

  closeCart = () => {
    this.setState({
      isCartOpen: false,
    });
  };
  openCart = () => {
    this.setState({
      isCartOpen: true,
    });
  };

  render() {
    return (
      <div>
        <ShopContext.Provider
          value={{
            ...this.state,
            fetchAllProducts: this.fetchAllProducts,
            fetchProductWithId: this.fetchProductWithId,
            closeCart: this.closeCart,
            openCart: this.openCart,
            addItemtoCart: this.addItemtoCheckout,
          }}
        >
          {this.props.children}
        </ShopContext.Provider>
      </div>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopContext, ShopConsumer };

export default ShopProvider;
