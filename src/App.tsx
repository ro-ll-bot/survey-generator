import React from 'react';
import './App.css';

const choiceView: (group: string)=>JSX.Element = (group: string) => (
  <div>
      <input type="number" name={group} id="" className="choiceNumberInput"/>
      <input type="text" name={group} id=""/>
  </div>
);

class ChoicesGroupView extends React.Component {
  groupName;
  isEditable: boolean;
 
  choices: JSX.Element[] = [];
  constructor(props: any){
    super(props);
    this.groupName = props.groupName;
    this.isEditable = props.isEditable;
  }

  state = {
    choices: this.choices
  }

  addNewChoice = () => {
    this.state.choices.push(choiceView(this.groupName));
    this.setState({choices: this.state.choices});
  };

  render() {
    return (<div>
      {/* {choiceView(this.groupName)} */}
      {this.state.choices}
      <button onClick={this.addNewChoice}>Add Choice</button>
    </div>);
  }
}

class QuestionView extends React.Component{
  render() {
    return (<div className="questionView">
      <textarea>Question</textarea>
      <span>hll</span>
      <ChoicesGroupView children="asdas" />
    </div>);
  }
}

export default class ExamGeneratorView extends React.Component {
  render() {
    return (<div className="generatorView">
      <QuestionView></QuestionView>
      <QuestionView></QuestionView>
      <QuestionView></QuestionView>
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
