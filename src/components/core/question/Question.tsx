import React from 'react';
import Answer from '../answer/Answer';

interface QuestionProps {
  id: number,
  content: string
}

const questions: QuestionProps[] = [
  {
    id: 1,
    content: "Is it a question?"
  },
  {
    id: 2,
    content: "Is it also a question?"
  },
  {
    id: 3,
    content: "What is it?"
  }
]

function Question(/*{id, content}: QuestionProps*/) {
  return (
    <ol className="question-container">
      {questions.map((question) => (
        <li key={question.id} className="question">
          <h3>{question.content}</h3>
          <Answer />
        </li>
      ))}
    </ol>
  );
}

export default Question;
