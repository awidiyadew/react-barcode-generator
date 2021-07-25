import { Table, Button } from 'antd';

const { Column } = Table;

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
    dataIndex: 'stock',
    key: 'stock'
  }
];

const ProductList = ({ products, deleteProduct }) => (
  <Table dataSource={products}>
    {columns.map(column => (
      <Column title={column.title} dataIndex={column.dataIndex} key={column.key} />
    ))}
    <Column
      title="Action"
      key="action"
      render={(_, product) => (
        <Button danger onClick={() => deleteProduct(product)}>
          Delete
        </Button>
      )}
    />
  </Table>
);

export default ProductList;
