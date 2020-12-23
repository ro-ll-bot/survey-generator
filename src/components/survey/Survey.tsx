import React from 'react';
import { QuestionView, Question } from '../question/Question';

export default class ExamGeneratorView extends React.Component {

  questionViews: JSX.Element[] = [];
  questionViewRefs: React.RefObject<QuestionView>[] = [];
  state = {
    questionViews: this.questionViews
  }

  addNewQuestion = () => {
    this.questionViewRefs.push(React.createRef<QuestionView>());
    this.questionViews.push(
      <QuestionView
        ref={this.questionViewRefs[this.questionViewRefs.length - 1]}
        id={this.questionViewRefs.length} />);
    this.setState({ questions: this.questionViews });
  }

  createExam = () => {
    const questions: Question[] = [];
    this.questionViewRefs.forEach(ref => {
      const question: Question | undefined = ref.current?.getQuestion();
      if (question !== undefined)
        questions.push(question);
    });

    console.log(JSON.stringify(questions));
  }

  render() {
    return (<div className="generatorView">
      {this.questionViews.map(question => question)}
      <button onClick={this.addNewQuestion}>Add Question</button>
      <button onClick={this.createExam}>Finish Survey</button>
    </div>);
  }
}