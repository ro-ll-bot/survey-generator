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

export interface Survey {
  id: number;
  owner: string;
  title: string;
  description: string;
  questionCount: string;
  questions: Question[];
  results: SurveyResult[];
  statusId: SurveyStatus;
  statusDesc: SurveyStatus;
}

export interface SurveyProps {
  surveyList: SurveyTimelineCardData[];
}
