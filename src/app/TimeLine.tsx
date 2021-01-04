import React from 'react'
import { Navbar } from '../components/navbar/Navbar';
import { Survey, SurveyTimeLine } from '../components/survey/Survey'

interface TimeLine {
  surveyList: Survey[];
}

const mockSurveys = require("../mockSurveyData.json");

export function TimeLine() {
  const surveyList: Survey[] = mockSurveys;

  return (
    <div>
      <Navbar/>
      <br/>
      <SurveyTimeLine surveyList={surveyList} />
    </div>
  )
}
