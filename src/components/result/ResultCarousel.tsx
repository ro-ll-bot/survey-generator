import { SurveyResult, SurveyResultProps } from './Result';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';

export default function ResultCarousel(props: SurveyResultProps) {
  const [results, setResults] = useState<SurveyResult[]>(props.resultList);
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
        {results.reverse().map((result) => (
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
