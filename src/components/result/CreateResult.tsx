import React from 'react'
import { Result } from './Result'

export function ResultUI() {
  const result = {
    id: 1,
    title: "First Result",
    image: "https://images.unsplash.com/photo-1580251645806-239f4df8ce13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    description: "lorem ipsum lorem ipsum lorem ipsum"
  }

  return (
    <div className="result-container">
      <h5>{result.title}</h5>
      {result.image &&
        <img src={result.image} alt={result.title} />
      }
      <p>{result.description}</p>
    </div>
  )
}

export default function CreateResult() {
  return (
    <div className="result-container">
      <div>
        <button className="button add-result-button">+</button>
        <p>Add Survey Result</p>
      </div>
    </div>
  )
}