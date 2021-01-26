import React, { createContext, useContext } from "react";
import CreateQuestionGroup from "../question/CreateQuestion";
import { Question } from "../question/Question";
import { ResultGroup } from "../result/CreateResult";
import { SurveyResult } from "../result/Result";
import { Survey } from "./Survey";
import {SurveyContext} from './SurveyContext';

export default function CreateSurvey() {

  const finishSurvey = () => {
    console.log(survey.questions);
  };

  const survey: Survey = {
    questions: [] as Question[],
    results: [] as SurveyResult[]
  } as Survey;

  return (
    <SurveyContext.Provider value={survey}>
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