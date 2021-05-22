import React from 'react';
import { Layout } from 'antd';

import ProductForm from '../ProductForm/ProductForm.component';
import ProductList from '../ProductList/ProductList.component';

const { Header, Content } = Layout;

const Home = ({ addProduct, products }) => {
  return (
    <Layout>
      <Header style={{ flex: 0, position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" style={{ color: '#fff' }}>
          Malini Collection - Barcode Generator
        </div>
      </Header>
      <Content className="site-layout" style={{ background: '#fff', padding: '50px 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 500 }}>
          <ProductForm onProductSubmit={addProduct} />
          <br />
          <ProductList products={products} />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
