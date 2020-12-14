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
      {this.state.choices.map(elem => elem)}
      <button onClick={this.addNewChoice}>Add Choice</button>
    </div>);
  }
}

class QuestionView extends React.Component{
  render() {
    return (<div className="questionView">
      <textarea>Question</textarea>
      <span>lock</span>
      <ChoicesGroupView/>
    </div>);
  }
}

export default class ExamGeneratorView extends React.Component {

  questions: JSX.Element[] = [];
  state = {
    questions: this.questions
  }

  addNewQuestion = () => {
    this.questions.push(<QuestionView></QuestionView>);
    this.setState({questions: this.questions});
  }
  
  render() {
    return (<div className="generatorView">
      {this.questions.map(question => question)}
      <button onClick={this.addNewQuestion}>Add Question</button>
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
