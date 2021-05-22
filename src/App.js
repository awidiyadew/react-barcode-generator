import React, { useState } from 'react';
import chunk from 'lodash/chunk';

import { BarcodePage } from './BarcodePage';
import { Home } from '../src/Home';

const BARCODE_COUNT_PERPAGE = 24;

const renderBarcodePages = (products) => {
  const chunkedProducts = chunk(products, BARCODE_COUNT_PERPAGE);
  const pageCount = chunkedProducts.length;
  return chunkedProducts.map((chunkOfProducts, index) => (
    <BarcodePage 
      key={`${index}`}
      products={chunkOfProducts} 
      pageNumber={index + 1}
      pageCount={pageCount}
    />
  ));
};

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  console.log('products', products);

  return (
    <Home 
      products={products}
      addProduct={addProduct} 
    />
  );
};

export default App;
