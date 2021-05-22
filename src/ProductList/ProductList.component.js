import { Table } from 'antd';

const columns = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: 'Product Label',
    dataIndex: 'label',
    key: 'label'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty'
  }
];

const ProductList = ({ products }) => (
  <Table columns={columns} dataSource={products} />
);

export default ProductList;
