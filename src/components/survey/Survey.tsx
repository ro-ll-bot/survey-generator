import React from 'react';
import { QuestionGroup, Question, QuestionGroupList } from '../question/Question';

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
      <QuestionGroupList questionList={questions}/>
    </div>
  )
}