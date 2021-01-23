import { Question } from "../question/Question";
import { SurveyResult } from "../result/Result";

export enum SurveyStatus {
  NEW = 0,
  VIEWED = 1,
  SOLVED = 2
}

export interface SurveyTimelineCardData {
  id: number;
  owner: string;
  title: string;
  description: string;
  questionCount: number;
  image?: string;
  statusId: SurveyStatus;
  statusDesc: SurveyStatus;
}

export interface SurveyProps {
  surveyList: SurveyTimelineCardData[];
}

// MANUAL STATE ..
interface SurveyData {
  questions: Map<number, Question>;
  results: SurveyResult[];
}

export const surveyState: SurveyData = {questions: new Map(), results: []};
