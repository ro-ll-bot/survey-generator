import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { SurveyGenerator, SurveyList } from '../../components/survey/Survey';
import { TimeLine } from '../timeline/TimeLine';

export function Home() {
  return (
    <BrowserRouter>
     {/* will add navigation bar */}
      <Switch>
        <Route exact path="/" component={TimeLine} />
        <Route path="/create-survey" component={SurveyGenerator} />
        <Route path="/survey/:id" component={SurveyList} />
      </Switch>
    </BrowserRouter>
  )
}
 