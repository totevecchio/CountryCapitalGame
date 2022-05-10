import React from 'react';
import ReactDOM from 'react-dom/client';
import CountryCapitalGame from './App';

const data = { Germany: "Berlin", Azerbaijan: "Baku" };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountryCapitalGame data={data} />
  </React.StrictMode>
);
