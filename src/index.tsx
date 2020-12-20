import React from 'react';
import ReactDOM from 'react-dom';
import Survey from './app/list/Survey';
import ExamGeneratorView from './components/survey/Survey';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Survey />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);