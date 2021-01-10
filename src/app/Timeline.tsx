import React from 'react';
import { SurveyTimelineCardData, SurveyTimeline } from '../components/survey/Survey';

const mockSurveys = require("../mockSurveyData.json");

export function Timeline() {
  const surveyList: SurveyTimelineCardData[] = mockSurveys;

  return (
    <div>
      <SurveyTimeline surveyList={surveyList} />
    </div>
  )
}
