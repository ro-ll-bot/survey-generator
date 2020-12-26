import React from 'react';
import { QuestionGroup, Question } from '../question/Question';

export default function SurveyGenerator() {

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
