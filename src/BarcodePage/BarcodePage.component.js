import React from 'react';
import chunk from 'lodash/chunk';

import { Barcode } from '../Barcode';
import priceTagImage from './pricetag.png';

const ROW_COUNT = 8;

const BarcodePage = ({ products }) => {
  const chunkedColumn = chunk(products, ROW_COUNT);
  return (
    <div style={styles.container}>
      {chunkedColumn.map((aChunk, index) => (
        <div key={`${index}`} style={styles.column}>
          {aChunk.map(renderBarcodeBox)}
        </div>
      ))}
    </div>
  );
};

const renderBarcodeBox = (product, index) => (
  <div style={styles.box} key={`${index}`}>
    <img style={styles.image} src={priceTagImage} alt="priceTag"/>
    {!!product && <Barcode containerStyle={styles.barcode} product={product} />}
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    width: '210mm',
    height: '297mm',
    padding: '25pt'
  },
  productTitle: {
    fontSize: '8pt',
    textTransform: 'uppercase'
  },
  productPrice: {
    fontSize: '10pt',
    fontWeight: 'bold'
  },
  pageSeparator: { 
    height: 35
  },
  box: {
    display: 'grid',
    border: '0.2pt dashed black',
    boxSizing: 'border-box',
    padding: 3
  },
  column: {
    flex: 1
  },
  image: {
    width: 230
  },
  barcode: {
    position: 'absolute',
    width: 115,
    marginTop: 32,
    marginLeft: 115
  }
};

export default BarcodePage;
