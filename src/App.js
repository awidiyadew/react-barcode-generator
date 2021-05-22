import React, { useState } from 'react';
import chunk from 'lodash/chunk';

import { BarcodePage } from './BarcodePage';
import { Home } from '../src/Home';

const BARCODE_COUNT_PERPAGE = 24;

const renderBarcodePages = (products) => {
  const multipliedProducts = products.reduce((acc, product) => {
    const productByStock = createProductPerStock(product, product.stock);
    return [...acc, ...productByStock];
  }, []);
  const chunkedProducts = chunk(multipliedProducts, BARCODE_COUNT_PERPAGE);
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

const OUTPUT_MODE = {
  PRICE_TAG: 'PRICE_TAG',
  BARCODE: 'BARCODE'
};

const createProductPerStock = (product, stock) => new Array(Number(stock)).fill(null)
.map(() => product);

const App = () => {
  const [products, setProducts] = useState([]);
  const [outputMode, setOutputMode] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const renderHomeApp = () => (
    <Home
      products={products}
      addProduct={addProduct} 
      onClickPriceTag={() => {
        setOutputMode(OUTPUT_MODE.PRICE_TAG);
      }}
      onClickBarcode={() => {
        setOutputMode(OUTPUT_MODE.BARCODE);
      }}
    />
  );

  return !outputMode ? renderHomeApp() : renderBarcodePages(products);
};

export default App;
