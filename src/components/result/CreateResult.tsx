import React, { useState } from 'react';
import { SurveyResult, SurveyResultProps } from './Result';
import ResultCarousel from './ResultCarousel';


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
}]

export function ResultGroup() {
  const [id, setId] = useState(3);
  const [results, setResults] = useState<SurveyResult[]>(mockResult);
  const reversedResults: SurveyResult[] = [...results].reverse();

  const CreateResult = () => {
    return (
      <div className="result-container">
        <div>
          <h6>Add Survey Result</h6>
          <div className="result-input-group">
            <input type="text" placeholder="Add Title" onChange={e => titleInputChange(e.target.value)} />
            <input type="text" placeholder="Add Description" onChange={e => descriptionInputChange(e.target.value)} />
            <input type="text" placeholder="Add Image URL" onChange={e => imageInputChange(e.target.value)} />
          </div>
          <button className="button add-result-button" onClick={addNewResult}>+</button>
        </div>
      </div>
    )
  }

  let newResult = {
    id: id + 1,
    title: "",
    description: "",
    image: ""
  };

  const titleInputChange = (data: string) => newResult.title = data;

  const descriptionInputChange = (data: string) => newResult.description = data;

  const imageInputChange = (data: string) => newResult.image = data;

  const addNewResult = () => {
    if (newResult.title && newResult.description) {
      setId(newResult.id);
      results.push(newResult);
      setResults(results);
    } else {
      alert("Please add Title and Description");
    }
  }

  return (
    <div className="result-group-container">
      <CreateResult />
      <ResultCarousel results={reversedResults} />
    </div>
  )
}
