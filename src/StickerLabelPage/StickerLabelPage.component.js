import React from 'react';

import { Barcode } from '../Barcode';

const PriceTagPage = ({ products }) => {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {renderRow()}
        {renderRow()}
        {renderRow()}
        {renderRow()}
        {renderRow()}
        {renderRow()}
      </div>
    </div>
  );
};

const renderRow = () => (
  <div style={styles.row}>
    {renderPricetagItem(0)}
    {renderPricetagItem(1)}
    {renderPricetagItem(2)}
    {renderPricetagItem(3)}
    {renderPricetagItem(4)}
  </div>
);

const product = {
  label: 'Jumsuit Jojon Jumsuit Jojon',
  price: 12000,
  code: '00001'
}

const renderPricetagItem = (index) => (
  <div style={styles.box} key={`${index}`}>
    <div id="barcode-container" style={styles.barcodeContainer}>
      <Barcode containerStyle={styles.barcode} product={product} />
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
