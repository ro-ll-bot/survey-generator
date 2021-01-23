import React from 'react';
import { SurveyTimelineCardData } from '../components/survey/Survey';
import SurveyTimeline from '../components/survey/SurveyTimeline'


const mockSurveys = require("../mockSurveyData.json");

export function Timeline() {
  const surveyList: SurveyTimelineCardData[] = mockSurveys;

  return (
    <div>
      <SurveyTimeline surveyList={surveyList} />
    </div>
  )
}
