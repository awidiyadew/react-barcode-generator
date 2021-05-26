import ReactBarcode from 'react-barcode';

const MAX_TITLE_LENGTH = 35;

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

const sliceTitle = title => {
  if (title.length > MAX_TITLE_LENGTH) {
    return `${[...title].slice(0, 32).join('')}...`;
  }
  return title;
}

const Barcode = ({ product, containerStyle }) => (
  <div style={containerStyle}>
    <div style={styles.productTitle}>{sliceTitle(product.label)}</div>
    <div style={styles.productPrice}>{`${convertToRupiah(product.price)}`}</div>
    <ReactBarcode
      value={product.code}
      width={1.2}
      height={22}
      format="CODE128"
      fontSize={8}
    />
  </div>
);

const styles = {
  productTitle: {
    fontSize: '6pt',
    textTransform: 'uppercase',
    textAlign: 'center',
    maxHeight:  50
  },
  productPrice: {
    fontSize: '8pt',
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export default Barcode;
