import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./css/main.css";
import { TimeLine} from './app/TimeLine';
import { SurveyDetailPage } from './app/SurveyDetail';

ReactDOM.render(
  <React.StrictMode>
    <SurveyDetailPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);