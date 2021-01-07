import { QuestionType } from '../question/Model';

export enum ChoiceType {
  CHOICE_SINGLE = "radio",
  CHOICE_MULTIPLE = "checkbox"
}

export enum ChoiceResultType {
  RATED,
  LINKED
}

export interface ChoiceProps {
  choiceList: Choice[];
  type: QuestionType;
}

export interface Choice {
  id: number;
  groupId: string,
  rate?: number;
  content: string | ImageBitmap;
  type?: ChoiceType,
  resultType: ChoiceResultType;
  linkedAnswers?: number[];
}