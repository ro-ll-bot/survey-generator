import { Choice } from '../choice/Choice';

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
  isCollapsed?: boolean;
  type: QuestionType;
}

export interface QuestionProps {
  questionList: Question[];
}
