import React from 'react';
import { Link } from 'react-router-dom';
import { Question } from '../question/Question';
import { SURVEY_BASE_URL } from './utils/SurveyConstants';
import CreateQuestionGroup from '../question/CreateQuestion';
import { ResultGroup } from '../result/CreateResult';
import { QuestionGroupList } from '../question/ListQuestion';

export enum SurveyStatus {
  NEW = 0,
  VIEWED = 1,
  SOLVED = 2
}

export interface SurveyTimelineCardData {
  id: number;
  owner: string;
  title: string;
  description: string;
  questionCount: number;
  image?: string;
  statusId: SurveyStatus;
  statusDesc: SurveyStatus;
}

export interface SurveyProps {
  surveyList: SurveyTimelineCardData[];
}

export function SurveyGenerator() {

  const questions: Question[] = [];

  const finishSurvey = () => {
    console.log(JSON.stringify(questions));
  };

  return (
    <div>
      <ResultGroup />
      <CreateQuestionGroup questionList={questions}></CreateQuestionGroup>
      <div className="question-container">
        <button className="button" onClick={finishSurvey}>Generate Survey</button>
      </div>
    </div>
  );
}

// If need to read this data dynamically use fs library instead of require.
const mockQuestions = require("../../mockQuestionData.json");

export function SurveyList() {
  const questions: Question[] = mockQuestions;

  return (
    <div>
      <QuestionGroupList questionList={questions} />
    </div>
  )
}

export function SurveyTimeline(props: SurveyProps) {
  return (
    <div className="survey-timeline">
      {props.surveyList.map((survey) => {
        return SurveyTimelineCard(survey);
      })}
    </div>
  )
}

function SurveyTimelineCard(survey: SurveyTimelineCardData) {

  // then create a const array to declare that kind of things
  // because it can grow in the future.
  const hrColorStatuses = ["green", "orange", "red"];
  
  let getToday = new Date().toDateString();
  const testUrl = "https://images.unsplash.com/photo-1580251645806-239f4df8ce13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"

  function SurveyStatusCheck(status: SurveyStatus) {
    return <hr color={hrColorStatuses[status]} />
  }

  return (
    <div className="survey-timeline-card">
      <div>
        <b> {getToday} <span className="survey-timeline-owner"> - {survey.owner}</span></b>
      </div>
      <b style={{ float: 'right' }}>&nbsp;&nbsp; {survey.statusDesc}</b>
      {SurveyStatusCheck(survey.statusId)}
      {survey.image !== undefined ?
        <img src={survey.image} alt={survey.title} width="250" height="150" /> : <img src={testUrl} alt={survey.title} width="250" height="150" />
      }
      <h3><Link to={`${SURVEY_BASE_URL}/${survey.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{survey.title}</Link></h3>
      <p>{survey.description.substring(0, 250)}...</p>
    </div>
  )
}
