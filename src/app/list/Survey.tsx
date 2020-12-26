import React, { useState } from 'react';
import { Choice } from '../../components/choice/Choice';
import { Question } from '../../components/question/Question';


export function Survey(questions: Question[]) {

  const questionEventHandler = (idx: number, selectedChoiceList: Choice[]) => {
    questions[idx].choices = selectedChoiceList;
  }

  return (
    <div className="question-container">
      <ol className="question-form">
        {questions.map((question) => {
          return QuestionUI(question, questionEventHandler)
        })}
      </ol>
      <button className="button">Send</button>
    </div>
  )
}

function QuestionUI(question: Question,
  questionEventHandler: (idx: number, selectedChoiceList: Choice[]) => void) {

  return (
    <li className="question">
      {question.question}
      <ul className="choice-container">
        {question.choices.map((choice) => {
          return ChoiceUI(choice);
        })}
      </ul>
    </li>
  );
}

function ChoiceUI(choice: Choice) {
  return (
    <li className="choice-list">
      <button className="button choice">
        {choice.content}
      </button>
    </li>
  )
}
