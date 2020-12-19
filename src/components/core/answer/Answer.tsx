import React from "react";

interface AnswerProps {
  id: number,
  content: string
}

const answers: AnswerProps[] = [
  {
    id: 1,
    content: "Answer 1"
  },
  {
    id: 2,
    content: "Answer 2"
  },
  {
    id: 3,
    content: "Answer 3"
  },
  {
    id: 4,
    content: "Answer 4"
  }
]

function Answer() {
  return (
    <ul className="answer-container">
      {answers.map((answer) => (
        <li key={answer.id} className="answer">
          <button className="button answer-button">
            {answer.content}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Answer;