import React from 'react';

import { BarcodePage } from './BarcodePage';
import products from '../src/BarcodePage/products.json';

const App = () => (
  <div>
    <BarcodePage 
      products={[...products, ...products, ...products]} 
      pageNumber={1}
      pageCount={1}
    />
  </div>
);

export default App;
