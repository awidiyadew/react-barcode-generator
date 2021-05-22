import readXlsxFile from 'read-excel-file'

const parse = (rows) => {
  const [, ...productRows] = rows;
  return productRows.reduce((products, row) => {
    const stock = row[3];
    const product = {
      code: row[0],
      label: row[1],
      price: row[2],
      stock
    };
    return [...products, product];
  }, []);
}

const parseExcelUpload = async (event) => {
  const rows = await readXlsxFile(event.file.originFileObj);
  return parse(rows);
};

export default parseExcelUpload;
