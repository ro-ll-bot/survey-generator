import React from 'react';
import './App.css';

const choiceView: (group: string) => JSX.Element = (group: string) => (
  <div>
    <input type="number" name={group} id="" className="choiceNumberInput" />
    <input type="text" name={group} id="" />
  </div>
);

interface ChoiceGroupProps {
  groupName: string;
  isEditable: boolean;
}

class ChoicesGroupView extends React.Component<ChoiceGroupProps> {
  choices: JSX.Element[] = [];

  state = {
    choices: this.choices
  }

  addNewChoice = () => {
    this.state.choices.push(choiceView(this.props.groupName));
    this.setState({ choices: this.state.choices });
  };

  render() {
    return (<div>
      {this.state.choices.map(elem => elem)}
      <button onClick={this.addNewChoice}>Add Choice</button>
    </div>);
  }
}

interface QuestionViewProps {
  sharedQuestionList: Question[];
}

class QuestionView extends React.Component<QuestionViewProps>{

  choices: Choice[] = [];

  protected setChoice(choices: Choice[]) {
    this.choices = choices;
  }

  private getQuestion(): Question {
    return {} as Question;
  }

  render() {
    return (<div className="questionView">
      <textarea>Question</textarea>
      <span>lock</span>
      <ChoicesGroupView groupName={"group"} isEditable={true} />
    </div>);
  }
}

export default class ExamGeneratorView extends React.Component {

  questionViews: JSX.Element[] = [];
  questions: Question[] = [];
  state = {
    questionViews: this.questionViews
  }

  addNewQuestion = () => {
    this.questionViews.push(<QuestionView 
      sharedQuestionList={this.questions}></QuestionView>);
    this.setState({ questions: this.questionViews });
  }

  createExam = () => {
    console.log(JSON.stringify(this.questions));
  }

  render() {
    return (<div className="generatorView">
      {this.questionViews.map(question => question)}
      <button onClick={this.addNewQuestion}>Add Question</button>
      <button onClick={this.createExam}>Finish Survey</button>
    </div>);
  }
}

interface Choice {
  rate: number;
  content: string | ImageBitmap;
}

interface Answer {
  title: string;
  description: string;
  range: RateRange;
}

interface RateRange {
  minRate: number;
  maxRate: number;
}

interface Question {
  choices: Choice[];
  question: string;
}

interface User {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

interface Exam {
  questions: Question[];
  title: string;
  author: User;
  answers: Answer[];
  tags: string[];
}
