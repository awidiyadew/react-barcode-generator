import React, { useState } from 'react';
import chunk from 'lodash/chunk';

import { PriceTagPage } from './PriceTagPage';
import { Home } from '../src/Home';
import data from './products.json';
import { StickerLabelPage } from './StickerLabelPage';

const BARCODE_COUNT_PERPAGE = 24;

const chunkProduct = (products) => {
  const multipliedProducts = products.reduce((acc, product) => {
    const productByStock = createProductPerStock(product, product.stock);
    return [...acc, ...productByStock];
  }, []);
  return chunk(multipliedProducts, BARCODE_COUNT_PERPAGE);
};

const renderPriceTagPages = (products) => {
  const chunkedProducts = chunkProduct(products);
  return chunkedProducts.map((chunkOfProducts, index) => (
    <PriceTagPage
      key={`${index}`}
      products={chunkOfProducts} 
      pageNumber={index + 1}
      pageCount={chunkedProducts.length}
    />
  ));
};

const renderStickerLabelPages = (products) => {
  const chunkedProducts = chunkProduct(products);
  return chunkedProducts.map((chunkOfProducts, index) => (
    <StickerLabelPage
      key={`${index}`}
      products={chunkOfProducts} 
      pageNumber={index + 1}
      pageCount={chunkedProducts.length}
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
  const [products, setProducts] = useState(data);
  const [outputMode, setOutputMode] = useState(OUTPUT_MODE.BARCODE);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const renderHomeApp = () => (
    <Home
      products={products}
      addProduct={addProduct} 
      onClickPriceTag={() => setOutputMode(OUTPUT_MODE.PRICE_TAG)}
      onClickBarcode={() => setOutputMode(OUTPUT_MODE.BARCODE)}
      onExcelParsed={setProducts}
    />
  );

  return (
    <>
      {!!outputMode || renderHomeApp()}
      {outputMode === OUTPUT_MODE.PRICE_TAG && renderPriceTagPages(products)}
      {outputMode === OUTPUT_MODE.BARCODE && renderStickerLabelPages(products)}
    </>
  );
};

export default App;
