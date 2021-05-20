import React, { useState } from 'react';
import chunk from 'lodash/chunk';

import { BarcodePage } from './BarcodePage';
import { ProductReader } from '../src/ProductReader';
import data from './products.json';

const BARCODE_COUNT_PERPAGE = 3;

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
  const [products, setProducts] = useState(data);
  const [showProductReader, setShowProductReader] = useState(false);
  return (
    <div>
      {showProductReader && 
        <ProductReader 
          onProductUploaded={(products) => {
            setProducts(products);
            setShowProductReader(false);
          }} 
        />
      }
      {renderBarcodePages(products)}
    </div>
  );
};

export default App;
