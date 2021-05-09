import ReactBarcode from 'react-barcode';

const Barcode = ({ product }) => (
  <div style={styles.container}>
    <div style={styles.productTitle}>{product.label}</div>
    <div style={styles.productPrice}>{`Rp${product.price}`}</div>
    <ReactBarcode 
      value={product.code}
      width={0.9}
      height={25}
      format="CODE128"
      fontSize={10}
    />
  </div>
);

const styles = {
  container: {
    paddingTop: 3
  },
  productTitle: {
    fontSize: '7pt',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  productPrice: {
    fontSize: '10pt',
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export default Barcode;
