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

  const deleteProduct = (product) => {
    const newProducts = products.filter(item => item.code !== product.code);
    setProducts(newProducts);
    storageService.overwriteProducts(newProducts);
  };

  const resetProduct = () => {
    setProducts([]);
    storageService.overwriteProducts([]);
  };

  return (
    <App
      products={products}
      addProduct={addProduct}
      overWriteProducts={overWriteProducts}
      deleteProduct={deleteProduct}
      resetProduct={resetProduct}
    />
  );
};

export default AppContainer;
