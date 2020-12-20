import React from 'react';
import ReactDOM from 'react-dom';

import ExamGeneratorView from './components/survey/Survey';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ExamGeneratorView />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);