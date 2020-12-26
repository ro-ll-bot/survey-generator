import React from 'react';
import { QuestionGroupView, Question } from '../question/Question';

export default function ExamGeneratorView() {

  const questions: Question[] = [];

  const finishSurvey = () => {
    console.log(JSON.stringify(questions));
  };

  return (<div>
    <QuestionGroupView questionList={questions}></QuestionGroupView>
    <button onClick={finishSurvey}>Finish Survey</button>
  </div>
  );
}
