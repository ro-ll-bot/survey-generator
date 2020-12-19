import React from "react";

const choiceView: (group: string, id: number) => JSX.Element = (group: string, id: number )=> (
  <div>
    <input type="number" name={group} id={`number_${id}`} className="choiceNumberInput" />
    <input type="text" name={group} id={`text_${id}`} />
  </div>
);

interface ChoiceGroupProps {
  groupName: string;
  isEditable: boolean;
}


export interface Choice {
  rate: number;
  content: string | ImageBitmap;
}


export class ChoicesGroupView extends React.Component<ChoiceGroupProps> {
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
