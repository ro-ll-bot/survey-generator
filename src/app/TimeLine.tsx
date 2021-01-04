import React from 'react'
import { Navbar } from '../components/navbar/Navbar';
import { SurveyTimelineCardData, SurveyTimeline } from '../components/survey/Survey'

const mockSurveys = require("../mockSurveyData.json");

export function TimeLine() {
  const surveyList: SurveyTimelineCardData[] = mockSurveys;

  return (
    <div>
      <Navbar/>
      <br/>
      <SurveyTimeLine surveyList={surveyList} />
    </div>
  )
}
