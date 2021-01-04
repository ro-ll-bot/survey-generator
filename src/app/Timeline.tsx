import React from 'react';
import { SurveyTimelineCardData, SurveyTimeline } from '../components/survey/Survey';
import { Navbar } from '../components/navbar/Navbar';

const mockSurveys = require("../mockSurveyData.json");

export function Timeline() {
  const surveyList: SurveyTimelineCardData[] = mockSurveys;

  return (
    <div>
      <Navbar/>
      <SurveyTimeline surveyList={surveyList} />
    </div>
  )
}
