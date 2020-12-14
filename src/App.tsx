import React from 'react';

class ChoicesGroupView extends React.Component {
  groupName;
  // choices: Choice[] = [];
  constructor(props: any){
    super(props);
    this.groupName = props.groupName;
  }

  state = {
    choices: []
  }

  render() {
    return (<div>
      <input type="radio" name={this.groupName} id=""/>
    </div>);
  }
}

export default class QuestionView extends React.Component{
  render() {
    return (<div>
      <textarea></textarea>
      <ChoicesGroupView children="asdas" />
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
  answers: Answer[];
}