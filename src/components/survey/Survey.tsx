import React from 'react';
import { useHistory } from 'react-router-dom';
import { QuestionGroup, Question, QuestionGroupList } from '../question/Question';


export enum SurveyStatus {
  NEW = "New",
  VIEWED = "Viewed",
  SOLVED = "Solved"
}

export interface Survey {
  id: number;
  owner: string;
  title: string;
  description: string;
  questionCount: number;
  image?: string;
  status?: SurveyStatus;
}

export interface SurveyProps {
  surveyList: Survey[];
}

export function SurveyGenerator() {

  const questions: Question[] = [];

  const finishSurvey = () => {
    console.log(JSON.stringify(questions));
  };

  return (<div>
    <QuestionGroup questionList={questions}></QuestionGroup>
    <button onClick={finishSurvey}>Finish Survey</button>
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

export function SurveyTimeLine(props: SurveyProps) {
    return (
      <div className="survey-timeline">
        {props.surveyList.map((survey) => {
          return SurveyTimeLineCard(survey);
        })}
      </div>
    )
}

function SurveyTimeLineCard(survey: Survey) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/survey/${survey.id}`);
  }

  return (
    <div className="survey-timeline-card" onClick={handleClick}>
      <span>{survey.status}</span>
      <img src={survey.image} alt={survey.title} />
      <h3>{survey.title}</h3>
      <p>{survey.description}</p>
      <div>
        <span>{survey.owner}</span>
        <span>{survey.questionCount}</span>
      </div>
    </div>
  )
}
