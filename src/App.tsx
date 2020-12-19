import React from 'react';
import './css/main.css';
import './App.css';

const choiceView: (group: string, id: number) => JSX.Element = (group: string, id: number) => (
  <div>
    <input type="number" name={group} id={`number_${id}`} className="choiceNumberInput" />
    <input type="text" name={group} id={`text_${id}`} />
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
    this.state.choices.push(choiceView(this.props.groupName, this.choices.length));
    this.setState({ choices: this.state.choices });
  };

  public getChoices(): Choice[] {
    const choiceList:Choice[] = [];
    // console.log("heyyo!");
    for(let i=0; i<this.choices.length; i++) {
      const choice: Choice = {
        rate: i,
        content: `content_${i}` 
      };
      choiceList.push(choice);
    }
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
  id: number;
  sharedQuestionList?: Question[];
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

export default class ExamGeneratorView extends React.Component {

  questionViews: JSX.Element[] = [];
  questions: Question[] = [];
  questionViewRefs: React.RefObject<QuestionView>[] = [];
  state = {
    questionViews: this.questionViews
  }

  addNewQuestion = () => {
    this.questionViewRefs.push(React.createRef<QuestionView>());
    this.questionViews.push(<QuestionView
      ref={this.questionViewRefs[this.questionViewRefs.length -1]} 
      id={this.questionViewRefs.length}></QuestionView>);
    this.setState({ questions: this.questionViews });
  }

  createExam = () => {
    
    this.questionViewRefs.forEach(ref => {
      const question: Question | undefined = ref.current?.getQuestion();
      if(question !== undefined)
        this.questions.push(question);
    });

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

// interface Answer {
//   title: string;
//   description: string;
//   range: RateRange;
// }

// interface RateRange {
//   minRate: number;
//   maxRate: number;
// }

interface Question {
  choices: Choice[];
  question: string;
}

// interface User {
//   firstname: string;
//   lastname: string;
//   username: string;
//   email: string;
// }

// interface Exam {
//   questions: Question[];
//   title: string;
//   author: User;
//   answers: Answer[];
//   tags: string[];
// }
