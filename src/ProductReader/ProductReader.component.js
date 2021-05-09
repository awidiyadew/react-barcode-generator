import React from 'react';
import readXlsxFile from 'read-excel-file'

class ProductReader extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._fileInput = React.createRef();
  }

  async _handleSubmit(event) {
    event.preventDefault();
    const file = this._fileInput.current.files[0];
    const rows = await readXlsxFile(file);
    const products = this._parseRows(rows);
    this.props.onProductUploaded(products);
  }

  _createProductPerStock(product, stock) {
    return new Array(stock).fill(null)
        .map(() => product);
  }

  _parseRows(rows) {
    const [, ...productRows] = rows;
    return productRows.reduce((products, row) => {
      const stock = row[2];
      const product = {
        code: row[0],
        label: row[1],
        price: row[3],
        stock
      };
      return [...products, ...this._createProductPerStock(product, stock)];
    }, []);
  }

  render() {
    return (
      <label>
        Upload product file:
        <input type="file" ref={this._fileInput} onChange={this._handleSubmit} />
      </label>
    );
  }
};

export default ProductReader;
