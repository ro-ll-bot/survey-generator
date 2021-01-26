import {createContext} from 'react';
import { Survey } from './Survey';

const SurveyContext = createContext<Survey>({} as Survey);

function SurveyReducer(state: any, item: Survey): any {
    return [...state, item];
}

export { SurveyContext, SurveyReducer }