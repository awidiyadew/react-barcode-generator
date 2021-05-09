import React from 'react';
import { Grid, Box } from 'grommet';

import { Barcode } from '../Barcode';

const COLUMN_COUNT = 10;
const ROW_COUNT = 7;

/**
 * 10x7 barcode grid in A4 page
 */
const BarcodePage = ({ products, pageNumber, pageCount }) => (
  <>
    <div style={styles.container}>
      <Grid
        columns={repeatSize('xsmall', COLUMN_COUNT)}
        rows={repeatSize('xsmall', ROW_COUNT)}
        gap="small"
      >
        {products.map(renderBarcodeBox)}
      </Grid>
    </div>
    {!isLastPage(pageNumber, pageCount) && <div style={styles.pageSeparator}></div>}
  </>
);

const isLastPage = (pageNumber, pageCount) => pageNumber === pageCount;

const renderBarcodeBox = (product, index) => (
  <Box
    key={`${index}`}
    direction="row"
    border={styles.boxBorder}
  >
    {!!product && <Barcode product={product} />}
  </Box>
);

const repeatSize = (size, length) => new Array(length).fill(size);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: '190mm',
    width: '297mm',
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
  }
};

export default BarcodePage;
