import React from 'react';
import { Choice } from '../../components/choice/Choice';
import { Question } from '../../components/question/Question';
import questionList from '../../questions.json';


export function Survey(/*questions: Question[]*/) {
  const questions: Question[] = questionList;

  return (
    <div className="question-container">
      <ol className="question-form">
        {questions.map((question) => {
          return QuestionUI(question)
        })}
      </ol>
      <button className="button">Send</button>
    </div>
  )
}

function QuestionUI(question: Question) {
  let selectedChoices: Choice[] = [];

  const selectChoice = (id: number) => {
    if(!selectedChoices.includes(question.choices[id])) {
      selectedChoices.push(question.choices[id]);
    } else {
      selectedChoices = selectedChoices.filter(choice => choice.id !== question.choices[id].id)
      // it should have any notification like "you removed this choice"
    }
    console.log(selectedChoices);
  };

  return (
    <li key={question.id} className="question">
      {question.question}
      <ul className="choice-container">
        {question.choices.map((choice) => {
          return ChoiceUI(choice, selectChoice);
        })}
      </ul>
    </li>
  );
}

function ChoiceUI(
  choice: Choice,
  choiceHandler: (id: number) => void) {
  
  return (
    <li key={choice.id} className="choice-list">
      <button onClick={e => choiceHandler(choice.id)} className="button">
        {choice.content}
      </button>
    </li>
  )
}
