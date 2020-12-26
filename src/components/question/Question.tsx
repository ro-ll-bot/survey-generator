import React from 'react';
import { Choice, ChoiceGroupView } from '../choice/Choice'


interface QuestionViewProps {
  id: number;
}

export class QuestionView extends React.Component<QuestionViewProps>{

  choice: Choice[] = [];

  public getQuestion(): Question {
    return {
      choices: this.choice,
      question: `question_${this.props.id}`
    } as Question;
  }

  render() {
    return (
    <div>
      <textarea>Question</textarea>
      <span>lock</span>
      <ChoiceGroupView choiceList={this.choice} />
    </div>);
  }
}


export interface Question {
  choices: Choice[];
  question: string;
}

export default QuestionView;
