import React from 'react';
import products from './products.json';
import Barcode from 'react-barcode';
import './BarcodePage.css'

const renderRow = () => (
  <tr style={styles.row}>
    {
      products.map(product => (
        <td style={styles.grid}>
          <div style={styles.productTitle}>{product.label}</div>
          <div style={styles.productPrice}>{`Rp${product.price}`}</div>
          <Barcode 
            value={product.id}
            width={1.3}
            height={30}
            format="CODE128"
            fontSize="12"
          />
        </td>
      ))
    }
  </tr>
);

const BarcodePage = () => (
  <div style={styles.container}>
    <table style={styles.table}>
    <tbody>
      {renderRow()}
      {renderRow()}
      {renderRow()}
      {renderRow()}
      {renderRow()}
      {renderRow()}
      {renderRow()}
      {renderRow()}
      {renderRow()}
      {renderRow()}
    </tbody>
    </table>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    width: '210mm',
    height: '297mm',
    border: '1pt solid black',
    margin: '25pt',
    padding: '10mm'
  },
  table: {
    flex: 1
  },
  row: {
    height: '20mm'
  },
  grid: {
    width: '38mm',
    minWidth: '38mm',
    maxWidth: '38mm',
    paddingTop: 8
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
