import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {SurveyGenerator, SurveyList} from './components/survey/Survey';
import "./css/main.css";

ReactDOM.render(
  <React.StrictMode>
    <SurveyList />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);