import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./css/main.css";
import { Timeline } from './app/Timeline';

ReactDOM.render(
  <React.StrictMode>
    <Timeline />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);