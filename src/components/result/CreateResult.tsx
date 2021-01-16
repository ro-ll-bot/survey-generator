import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import React, { useState } from 'react';
import { SurveyResult } from './Result';

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
},
{
  id: 3,
  title: "Second Result",
  description: "lorem ipsum lorem ipsum lorem ipsum lorem lorem lorem",
  image: "https://images.unsplash.com/photo-1580251645806-239f4df8ce13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
},
{
  id: 4,
  title: "Second Result",
  description: "lorem ipsum lorem ipsum lorem ipsum lorem lorem lorem",
  image: "https://images.unsplash.com/photo-1580251645806-239f4df8ce13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
}]

export function ResultGroup() {
  const [id, setId] = useState(3);
  const [results, setResults] = useState<SurveyResult[]>(mockResult);
  const reversedResults = [...results].reverse();

  const ResultCarousel = () => {
    return (
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={10000}
          centerMode={true}
          className=""
          containerClass="container"
          dotListClass=""
          draggable={true}
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={10}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 10
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 10
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 10
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable>
            <CreateResult />
          {reversedResults.reverse().map((result) => (
            <div key={result.id} className="result-container">
              <h5>{result.title}</h5>
              {result.image &&
                <img src={result.image} alt={result.title} />
              }
              <p>{result.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    )
  }

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
      <ResultCarousel />
    </div>
  )
}
