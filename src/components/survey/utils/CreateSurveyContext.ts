import React from "react";

import {Question} from '../../question/Question';
import { SurveyResult } from "../../result/Result";

interface SurveyStateData {
    questions: Question[];
    results: SurveyResult[];
};

const surveyState: SurveyStateData = {questions: [], results: []};
const surveyContext = React.createContext(surveyState);

export {surveyContext};