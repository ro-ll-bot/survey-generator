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

  public getChoices(): Choice[] {
    const choiceList:Choice[] = [];
    console.log("heyyo!");
    this.choices.forEach(choiceView => {
      choiceList.push();
      console.log(choiceView);
    })
    return choiceList;
  }

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
  choiceRef: React.RefObject<ChoicesGroupView>;

  constructor(props: any){
    super(props);
    this.choiceRef = React.createRef<ChoicesGroupView>(); 
  }

  protected setChoice(choices: Choice[]) {
    this.choices = choices;
  }

  public getQuestion(): Question{
    console.log("Hello world");
    const choices = this.choiceRef.current?.getChoices();
    return {
      choices: choices,
      question: "my question"
    } as Question;
  }

  render() {
    return (<div className="questionView">
      <textarea>Question</textarea>
      <span>lock</span>
      <ChoicesGroupView ref={this.choiceRef} groupName={"group"} isEditable={true} />
    </div>);
  }
}

export default class ExamGeneratorView extends React.Component {

  questionViews: JSX.Element[] = [];
  questions: Question[] = [];
  questionViewRef: React.RefObject<QuestionView>;
  state = {
    questionViews: this.questionViews
  }

  constructor(props: any) {
    super(props);
    this.questionViewRef = React.createRef<QuestionView>();
  }

  addNewQuestion = () => {
    this.questionViews.push(<QuestionView
      ref={this.questionViewRef} 
      sharedQuestionList={this.questions}></QuestionView>);
    this.setState({ questions: this.questionViews });
  }

  createExam = () => {
    console.log("create exm function started..");
    console.log(this.questionViewRef);
    // this.questionViews.forEach(questionView => {
      
    // });
    this.questionViewRef.current?.getQuestion();
    console.log("This question ref ran.");
  }

  componentDidMount() {
    console.log(this.questionViewRef);    
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
