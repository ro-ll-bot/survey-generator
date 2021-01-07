import { Choice } from '../choice/Model';

export enum QuestionType {
  RATED,
  LINKED,
  MULTTIPLE_CHOICE
}

export interface Question {
  id: number;
  choices: Choice[];
  question: string;
  isLock?: boolean;
  type: QuestionType;
}

export interface QuestionProps {
  questionList: Question[];
}
