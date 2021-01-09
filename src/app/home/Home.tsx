import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { SurveyGenerator, SurveyList } from '../../components/survey/Survey';
import { Navbar } from '../../components/navbar/Navbar';
import { Timeline } from '../Timeline';
import { SURVEY_BASE_URL } from '../../components/survey/utils/SurveyConstants';

export function Home() {
  return (
    <BrowserRouter>
      <Navbar />
      <br/> <br/> <br/>
      <Switch>
        <Route exact path="/" component={Timeline} />
        <Route exact path="/create-survey" component={SurveyGenerator} />
        <Route exact path={`${SURVEY_BASE_URL}/:id`} component={SurveyList} />
      </Switch>
    </BrowserRouter>
  )
}
