import React from 'react';
import products1 from './products.json';
import products2 from './data.json';
import Barcode from 'react-barcode';
import './BarcodePage.css'

const renderRow = (products) => (
  <tr style={styles.row}>
    {
      products.map(product => (
        <td style={styles.grid}>
          <div style={styles.productTitle}>{product.label}</div>
          <div style={styles.productPrice}>{`Rp${product.price}`}</div>
          <Barcode 
            value={product.id}
            width={1}
            height={20}
            format="CODE128"
            fontSize="12"
          />
        </td>
      ))
    }
  </tr>
);

const BarcodePage = () => (
  <div id="barcode-page" style={styles.container}>
    <table style={styles.table}>
    <tbody>
      {renderRow(products1)}
      {renderRow(products1)}
      {renderRow(products1)}
      {renderRow(products1)}
      {renderRow(products2)}
      {renderRow(products2)}
      {renderRow(products2)}
      {renderRow(products2)}
    </tbody>
    </table>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: '190mm',
    width: '297mm',
    margin: '25pt'
  },
  table: {
    flex: 1,
    margin: 15
  },
  row: {
    height: '28mm'
  },
  grid: {
    width: '30mm',
    minWidth: '30mm',
    maxWidth: '30mm'
  },
  productTitle: {
    fontSize: '8pt',
    textTransform: 'uppercase'
  },
  productPrice: {
    fontSize: '10pt',
    fontWeight: 'bold'
  }
};

// width: '38mm',
// height: '15mm'

export default BarcodePage;
