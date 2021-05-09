import React, { useState } from 'react';
import chunk from 'lodash/chunk';

import { BarcodePage } from './BarcodePage';
import { ProductReader } from '../src/ProductReader';

const BARCODE_COUNT_PERPAGE = 70;

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
  const [showProductReader, setShowProductReader] = useState(true);
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
