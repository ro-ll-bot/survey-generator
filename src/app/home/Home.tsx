import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import CreateSurvey from '../../components/survey/CreateSurvey'
import SurveyTimeline from '../../components/survey/SurveyTimeline';
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
        <Route exact path="/create-survey" component={CreateSurvey} />
        <Route exact path={`${SURVEY_BASE_URL}/:id`} component={SurveyTimeline} />
      </Switch>
    </BrowserRouter>
  )
}
