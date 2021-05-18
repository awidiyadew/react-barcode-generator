import ReactBarcode from 'react-barcode';

const convertToRupiah = (value) => {
	let convertedDigit = '';		
	const reversedValue = value.toString().split('').reverse().join('');
	for(let i = 0; i < reversedValue.length; i++) {
    if(i % 3 === 0) {
      convertedDigit += reversedValue.substr(i, 3) + '.';
    }
  }
  const normalizedValue = convertedDigit.split('', convertedDigit.length - 1).reverse().join('');
	return `Rp${normalizedValue}`;
}

const Barcode = ({ product }) => (
  <div style={styles.container}>
    <div style={styles.productTitle}>{product.label}</div>
    <div style={styles.productPrice}>{`${convertToRupiah(product.price)}`}</div>
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
