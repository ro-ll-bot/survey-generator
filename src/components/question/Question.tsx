import React from 'react';
import { Choice, ChoicesGroupView } from '../choice/Choice'


interface QuestionViewProps {
  id: number;
  sharedQuestionList?: Question[];
}

export class QuestionView extends React.Component<QuestionViewProps>{

  choices: Choice[] = [];
  choiceRef: React.RefObject<ChoicesGroupView>;

  constructor(props: any) {
    super(props);
    this.choiceRef = React.createRef<ChoicesGroupView>();
  }

  protected setChoice(choices: Choice[]) {
    this.choices = choices;
  }

  public getQuestion(): Question {
    // console.log("Hello world");
    const choices = this.choiceRef.current?.getChoices();
    return {
      choices: choices,
      question: `question_${this.props.id}`
    } as Question;
  }

  render() {
    return (<div className="questionView">
      <textarea id={`question_${this.props.id}`}>Question</textarea>
      <span>lock</span>
      <ChoicesGroupView ref={this.choiceRef} groupName={"group"} isEditable={true} />
    </div>);
  }
}


export interface Question {
  choices: Choice[];
  question: string;
}

export default QuestionView;
