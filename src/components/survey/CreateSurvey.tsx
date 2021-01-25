import React, { createContext, useContext } from "react";
import CreateQuestionGroup from "../question/CreateQuestion";
import { ResultGroup } from "../result/CreateResult";
import SurveyContext from './SurveyContext';

export function CreateSurvey() {

  const finishSurvey = () => {
    console.log(JSON.stringify(surveyState.questions));
  };

  return (
    <SurveyContext.Provider>
      <div>
        <ResultGroup />
        <CreateQuestionGroup></CreateQuestionGroup>
        <div className="question-container">
          <button className="button" onClick={finishSurvey}>Generate Survey</button>
        </div>
      </div>
    </SurveyContext.Provider>
  );
}