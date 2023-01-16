import React, { Component } from "react";
import ProductCard from "./ProductCard";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch("https://moon-tech-server-fawn.vercel.app/products")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data.data }));
  };

  render() {
    const { products } = this.state;
    return (
      <div className="">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    );
  }
}

export default Products;
