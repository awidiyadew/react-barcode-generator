import React from 'react';
import chunk from 'lodash/chunk';

import { Barcode } from '../Barcode';

const BARCODE_COUNT_PERPAGE = 30;

const PriceTagPage = ({ products }) => {
  const missingLength = BARCODE_COUNT_PERPAGE - products.length;
  const mappedList = [...products, ...(new Array(missingLength).fill(null))]
  const chunked = chunk(mappedList, 5);
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {
          chunked.map(chunk => renderRow(chunk))
        }
      </div>
    </div>
  );
};

const renderRow = (items) => (
  <div style={styles.row}>
    {
      items.map((it, index) => renderPricetagItem(it, index))
    }
  </div>
);

const renderPricetagItem = (item, index) => (
  <div style={item ? styles.boxBorder : styles.box} key={`${index}`}>
    <div id="barcode-container" style={styles.barcodeContainer}>
      {!!item && <Barcode containerStyle={styles.barcode} product={item} />}
    </div>
  </div>
);

const styles = {
  container: {
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    height: '165mm',
    width: '210mm',
    padding: '5mm',
    border: '0.5pt solid grey'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%', 
    height: '100%'
  },
  box: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '37mm',
    maxWidth: '37mm',
    height: '24mm',
    padding: 3
  },
  boxBorder: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    border: '0.5pt dashed grey',
    width: '37mm',
    maxWidth: '37mm',
    height: '24mm',
    padding: 3
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  barcode: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    alignItems: 'center'
  },
  barcodeContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  }
};

export default PriceTagPage;
