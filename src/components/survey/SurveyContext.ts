import {createContext} from 'react';
import { Survey } from './Survey';

const SurveyContext = createContext<Survey>({} as Survey);
export default SurveyContext;