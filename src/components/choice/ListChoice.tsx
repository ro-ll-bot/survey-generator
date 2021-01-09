import { useEffect, useState } from "react";
import { Choice, ChoiceProps } from "./Choice";

export function ChoiceGroupList(props: ChoiceProps) {

  // const [choiceStates, setChoiceStates] = useState<boolean[]>([]);

  const choiceUI = (choice: Choice) => {
    return (
      <div>
        <div className="choice"><span><input type={choice.type} name={choice.groupId} value={choice.content.toString()} /> {choice.content}</span></div>
      </div>
    )
  };

  return (
    <div >
      {props.choiceList.map(choice => choiceUI(choice))}
      <hr/>
    </div>);
}
