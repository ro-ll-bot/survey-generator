import React, { useState } from 'react'
import { Result } from './Result'

const mockResult = [{
  id: 1,
  title: "First Result",
  description: "lorem ipsum lorem ipsum lorem ipsum",
  image: "https://images.unsplash.com/photo-1580251645806-239f4df8ce13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
}, {
  id: 2,
  title: "Second Result",
  description: "lorem ipsum lorem ipsum lorem ipsum lorem lorem lorem",
  image: "https://images.unsplash.com/photo-1580251645806-239f4df8ce13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
}
]

export function ResultGroup() {
  const [id, setId] = useState(3);
  const [results, setResults] = useState<Result[]>(mockResult);

  const ResultUI = () => {
    return (
      <div className="result-group">
        {results.map((result) => (
          <div key={result.id} className="result-container">

            <h5>{result.title}</h5>
            {result.image &&
              <img src={result.image} alt={result.title} />
            }
            <p>{result.description}</p>
          </div>
        ))}
        <CreateResult />
      </div>
    )
  }

  const CreateResult = () => {
    return (
      <div className="result-container">
        <div>
          <h6>Add Survey Result</h6>
          <div className="result-input-group">
            <input type="text" placeholder="Add Title" onChange={e => titleInputChange(e.target.value)}/>
            <input type="text" placeholder="Add Description" onChange={e => descriptionInputChange(e.target.value)}/>
            <input type="text" placeholder="Add Image URL" onChange={e => imageInputChange(e.target.value)}/>
          </div>
          <button className="button add-result-button" onClick={addNewResult}>+</button>
        </div>
      </div>
    )
  }

  let newResult= {
    id: id + 1,
    title: "",
    description: "",
    image: ""
  };

  const titleInputChange = (data: string) => newResult.title = data;

  const descriptionInputChange = (data: string) => newResult.description = data;

  const imageInputChange = (data: string) => newResult.image = data;

  const addNewResult = () => {
    setId(newResult.id);
    results.push(newResult);

    setResults(results);
  }

  return (
    <div>
      <ResultUI />
    </div>
  )
}
