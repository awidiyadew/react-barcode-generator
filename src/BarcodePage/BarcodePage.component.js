import React from 'react';
import { Grid, Box } from 'grommet';

import { Barcode } from '../Barcode';
import priceTagImage from './pricetag.png';

const COLUMN_COUNT = 3;
const ROW_COUNT = 7;

/**
 * 10x7 barcode grid in A4 page
 */
const BarcodePage = ({ products, pageNumber, pageCount }) => (
  <>
    <div style={styles.container}>
        {products.map(renderBarcodeBox)}
    </div>
    {!isLastPage(pageNumber, pageCount) && <div style={styles.pageSeparator}></div>}
  </>
);

const isLastPage = (pageNumber, pageCount) => pageNumber === pageCount;

const renderBarcodeBox = (product, index) => (
  <div style={styles.image}>
    {!!product && <Barcode product={product} />}
  </div>
);

const repeatSize = (size, length) => new Array(length).fill(size);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    width: '190mm',
    height: '297mm',
    margin: '25pt'
  },
  productTitle: {
    fontSize: '8pt',
    textTransform: 'uppercase'
  },
  productPrice: {
    fontSize: '10pt',
    fontWeight: 'bold'
  },
  boxBorder: {
    color: "border",
    size: "xsmall",
    style: "dashed",
    side: "horizontal"
  },
  pageSeparator: { 
    height: 35
  },
  image: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    paddingRight: 8,
    width: 300,
    backgroundSize: 'contain',
    backgroundImage: `url(${priceTagImage})`
  }
};

export default BarcodePage;
