const PRODUCTS_KEY = 'products';

const storage = window.localStorage;

const getProducts = () => {
  const productsJson = storage.getItem(PRODUCTS_KEY);
  return JSON.parse(productsJson) || [];
};

const saveProduct = (product) => {
  const products = getProducts();
  const productsJson = JSON.stringify([...products, product]);
  return storage.setItem(PRODUCTS_KEY, productsJson);
};

const overwriteProducts = (products) => storage.setItem(PRODUCTS_KEY, JSON.stringify(products));

export default {
  saveProduct,
  getProducts,
  overwriteProducts
};
