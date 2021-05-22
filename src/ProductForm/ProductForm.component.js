import { Form, Input, Button, Card, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 14,
  },
};

const getValueFromEvent = (event) => {
  console.log('event', event);
};

const ProductForm = ({ onProductSubmit }) => {
  const [form] = Form.useForm();

  const renderInput = (formItemProps, inputProps) => (
    <Form.Item
      rules={[{ required: true }]}
      {...formItemProps}
    >
      {<Input {...inputProps} />}
    </Form.Item>
  );

  const renderUploadButton = () => (
    <Form.Item
      name="upload"
      label="Upload excel"
      valuePropName="fileList"
      getValueFromEvent={getValueFromEvent}
    >
      <Upload name="logo" action="/upload.do" listType="text">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>
  );

  const onFormSubmit = (values) => {
    onProductSubmit(values);
    form.resetFields();
  };

  return (
    <Card title="Input Products">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFormSubmit}>
        {renderInput({ name: 'code', label: 'Code' })}
        {renderInput({ name: 'label', label: 'Product Label' })}
        {renderInput({ name: 'price', label: 'Price' }, { prefix: 'Rp', type: 'number', min: 0, step: 1000 })}
        {renderInput({ name: 'qty', label: 'Qty' }, { type: 'number', min: 0 })}
        {renderUploadButton()}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductForm;
