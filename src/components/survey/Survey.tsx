import React from 'react';
import { Link } from 'react-router-dom';
import { Question } from '../question/Question';
import { SURVEY_BASE_URL } from './utils/SurveyConstants';

import CreateQuestionGroup from '../question/CreateQuestion';
import  { ResultGroup } from '../result/CreateResult';


export enum SurveyStatus {
  NEW = "New",
  VIEWED = "Viewed",
  SOLVED = "Solved"
}

export interface SurveyTimelineCardData {
  id: number;
  owner: string;
  title: string;
  description: string;
  questionCount: number;
  image?: string;
  status?: SurveyStatus;
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
//const mockQuestions = require("../../mockQuestionData.json");

export function SurveyList() {
  //const questions: Question[] = mockQuestions;

  return (
    <div>
      {/* <QuestionGroupList questionList={questions} /> */}
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

  return (
    <div className="survey-timeline-card">
      <img src={survey.image} alt={survey.title} />
      <hr />
      <h3><Link to={`${SURVEY_BASE_URL}/${survey.id}`}>{survey.title}</Link></h3>
      <p>{survey.description}</p>
      <div>
        <span>{`Author ${survey.owner}`}</span>
        <br />
        <span>{`The ${survey.title} has ${survey.questionCount} questions.`}</span>
        <br />
        <span>{survey.status}</span>
        <br />
      </div>
    </div>
  )
}
