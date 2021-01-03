import React from 'react'
import { Survey, SurveyTimeLine } from '../../components/survey/Survey'

interface TimeLine {
  surveyList: Survey[];
}

const mockSurveys = require("../../mockSurveyData.json");

export function TimeLine() {
  const surveyList: Survey[] = mockSurveys;

  return (
    <div>
      <SurveyTimeLine surveyList={surveyList} />
    </div>
  )
}
