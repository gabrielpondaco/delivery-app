import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { requestProducts } from '../services/request';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await requestProducts('/products');
      console.log(response);
      setProducts(response);
    }
    getProducts();
  }, []);
  return (
    <main>
      <Header />
      <h1>Products</h1>
      { products?.map((product) => (
        <li key={ product.id }>{product.name}</li>
      ))}
    </main>
  );
}

export default Products;
