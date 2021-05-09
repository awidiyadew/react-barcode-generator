import React from 'react';
import chunk from 'lodash/chunk';

import { BarcodePage } from './BarcodePage';
import productSeeds from '../src/BarcodePage/products.json';

const BARCODE_COUNT_PERPAGE = 70;

const renderBarcodePages = (products) => {
  const chunkedProducts = chunk(products, BARCODE_COUNT_PERPAGE);
  const pageCount = chunkedProducts.length;
  return chunkedProducts.map((chunkOfProducts, index) => (
    <BarcodePage 
      products={chunkOfProducts} 
      pageNumber={index + 1}
      pageCount={pageCount}
    />
  ));
};

const App = () => (
  <div>
    {renderBarcodePages(productSeeds)}
  </div>
);

export default App;
