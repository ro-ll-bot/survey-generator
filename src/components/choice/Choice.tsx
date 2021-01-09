import { useEffect, useState } from "react";
import { Question, QuestionProps } from "../question/Question";

export enum ChoiceType {
  CHOICE_SINGLE = "radio",
  CHOICE_MULTIPLE = "checkbox"
}

interface ChoiceProps {
  choiceList: Choice[];
}

export interface Choice {
  id: number;
  groupId: string,
  rate: number;
  content: string;
  type?: ChoiceType,
}

function ChoiceUI(id: number,
  inputHandler: (idx: number, data: string) => void,
  rateHandler: (idx: number, data: number) => void) {

  return (
    <div>
      <input type="number" onChange={e => rateHandler(id, parseInt(e.target.value))} />
      <input type="text" onChange={e => inputHandler(id, e.target.value)} />
    </div>
  );
}


export function ChoiceGroupList(props: ChoiceProps) {

  // const [choiceStates, setChoiceStates] = useState<boolean[]>([]);

  const choiceUI = (choice: Choice) => {
    return (
      <div>
        <div className="choice"><span><input type={choice.type} name={choice.groupId} value={choice.content} /> {choice.content}</span></div>
      </div>
    )
  };

  return (
    <div >
      {props.choiceList.map(choice => choiceUI(choice))}
      <hr/>
    </div>);
}

export function ChoiceGroup(props: ChoiceProps) {
  const [id, setId] = useState(0);
  const [choices, setChoices] = useState<Choice[]>(props.choiceList);

  useEffect(() => {
    // render the screen when new choice added.
  }, [choices]);

  const updateChoiceInputData = (idx: number, data: string) => {
    choices[idx].content = data;
  };

  const updateChoiceRateData = (idx: number, data: number) => {
    choices[idx].rate = data;
  };

  const addNewChoice = () => {
    choices.push({ id: id, rate: 0, content: "" } as Choice);
    setId(id + 1);
    setChoices(choices);
  };

  return (
    <div>
      {choices.map(choice => {
        return ChoiceUI(choice.id, updateChoiceInputData, updateChoiceRateData);
      })}
      <button onClick={addNewChoice}>Add Choice</button>
    </div>
  );
}
