import { useEffect, useState } from "react";

export interface Choice {
  id: number;
  rate: number;
  content: string | ImageBitmap;
}

function getChoiceViewUI(id: number, 
  inputHandler: (idx:number, data:string)=>void,
  rateHandler: (idx: number, data: number)=>void) {
  
  return (
    <div>
      <input type="number" onChange={e => rateHandler(id, parseInt(e.target.value))}/>
      <input type="text"onChange={e => inputHandler(id, e.target.value)}/>
    </div>
  );
}

export interface ChoiceProps {
  choiceList: Choice[];
}

export function ChoiceGroupView(props: ChoiceProps) {
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
    choices.push({id:id, rate:0, content:""} as Choice);
    setId(id + 1);
    setChoices(choices);
  };

  return (
    <div>
      {choices.map(choice => {
        return getChoiceViewUI(choice.id, updateChoiceInputData, updateChoiceRateData);
      })}
      <button onClick={addNewChoice}>Add Choice</button>
    </div>
  );

}

