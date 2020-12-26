import React, { useState } from 'react';


interface Question {
  id: number,
  content: string,
  choices: Choice[]
}

interface Choice {
  id: number,
  content: string,
  type?: string,
  rate?: number
}

function Survey() {
  const questionList: Question[] = [
    {
      id: 1,
      content: "is it a question?",
      choices: [
        {
          id: 1,
          content: "choice A",
          rate: 10
        },
        {
          id: 2,
          content: "choice B",
          rate: 5
        },
        {
          id: 3,
          content: "choice C"
        }
      ]
    },
    {
      id: 2,
      content: "is it a question?",
      choices: [
        {
          id: 1,
          content: "choice A",
          rate: 10
        },
        {
          id: 2,
          content: "choice B",
          rate: 5
        },
        {
          id: 3,
          content: "choice C"
        }
      ]
    },
    {
      id: 3,
      content: "is it a question?",
      choices: [
        {
          id: 1,
          content: "choice A",
          rate: 10
        },
        {
          id: 2,
          content: "choice B",
          rate: 5
        },
        {
          id: 3,
          content: "choice C"
        }
      ]
    }
  ]

  const [questions, setQuestions] = useState(questionList);

  return (
    <div className="question-container">
      <ol className="question-form">
        {questions.map((question) => (
          <li className="question">
            {question.content}
            <ul className="choice-container">
              {question.choices.map((choice) => (
                <li className="choice-list"> 
                  <button className="button choice">
                  {choice.content}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <button className="button">Send</button>
    </div>
  )
}

export default Survey;
