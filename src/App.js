import './App.css';
import React from 'react';
import Pdf from 'react-to-pdf';

import { BarcodePage } from './BarcodePage';

const ref = React.createRef();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Malini Collection</h1>
      </header>
      <div className="content">
      <Pdf targetRef={ref} filename="barcode.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <BarcodePage />
      </div>
      </div>
    </div>
  );
}

export default App;
