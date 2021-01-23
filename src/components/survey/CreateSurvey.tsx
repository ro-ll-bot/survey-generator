import React from "react";
import CreateQuestionGroup from "../question/CreateQuestion";
import { ResultGroup } from "../result/CreateResult";
import { surveyState } from "./Survey";


export default function CreateSurvey() {

  const finishSurvey = () => {
    console.log(JSON.stringify(surveyState.questions));
  };

  return (
    <div>
      <ResultGroup />
      <CreateQuestionGroup></CreateQuestionGroup>
      <div className="question-container">
        <button className="button" onClick={finishSurvey}>Generate Survey</button>
      </div>
    </div>
  );
}