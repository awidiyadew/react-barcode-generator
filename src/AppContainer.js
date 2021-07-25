import { useState } from 'react';

import App from './App';
import storageService from './storageService';

const AppContainer = () => {
  const savedProducts = storageService.getProducts();
  const [products, setProducts] = useState(savedProducts);

  const addProduct = (product) => {
    setProducts([...products, product]);
    storageService.saveProduct(product);
  };

  const overWriteProducts = (products) => {
    setProducts(products);
    storageService.overwriteProducts(products);
  };

  return (
    <App
      products={products}
      addProduct={addProduct}
      overWriteProducts={overWriteProducts}
    />
  );
};

export default AppContainer;
