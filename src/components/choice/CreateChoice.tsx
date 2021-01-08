import { useState } from 'react';
import { QuestionType } from '../question/Model';
import { Choice, ChoiceProps } from './Model';

function ChoiceLinkedUi(choice: Choice,
    updateAns: (idx: number, data: number[]) => void,
    updateContent: (idx: number, data: string) => void) {
        
    const updateLinkedContent = (data: string) => {
        const splitted: number[] = data.split(',').map(d => parseInt(d));
        updateAns(choice.id, splitted);
    };

    return (
        <div className="choice-ans">
            <input className="choice-ans-linked" placeholder="1,2..." type="text" onChange={e => updateLinkedContent(e.target.value)} />
            <textarea className="choice-content" placeholder="Choice content..." onChange={e => updateContent(choice.id, e.target.value)} ></textarea>
        </div>
    );
}

function ChoiceRatedUi(choice: Choice, 
  updateAns: (idx: number, data: number) => void,
  updateContent: (idx: number, data: string) => void) {

  return (
    <div>
      <input className="choice-ans-rated" type="rate" onChange={e => updateAns(choice.id, parseInt(e.target.value))} />
      <input className="choice-content" type="text" onChange={e => updateContent(choice.id, e.target.value)} />
    </div>
  );
}

export default function CreateChoiceGroup(props: ChoiceProps) {
    const [id, setId] = useState(0);
    const [choices, setChoices] = useState<Choice[]>(props.choiceList);

    const updateAnswer = (idx: number, data: any) => {
        if(QuestionType.LINKED === props.type)
            choices[idx].linkedAnswers = data;
        if(QuestionType.RATED === props.type)
            choices[idx].rate = data;
    };

    const updateContent = (idx: number, data: string) => {
        choices[idx].content = data;
    };

    const addNewChoice = () => {
        choices.push({ id: id, linkedAnswers: [0], content: "" } as Choice);
        setId(id + 1);
        setChoices(choices);
    };

    const dynamicChoiceUi = (choice: Choice) => {
        if(QuestionType.LINKED === props.type)
            return ChoiceLinkedUi(choice,updateAnswer, updateContent);
        if(QuestionType.RATED === props.type)
            return ChoiceRatedUi(choice,updateAnswer, updateContent);
    };

    const pointerEvents = props.editable?'auto':'none'

    return (
        <div style={{pointerEvents: pointerEvents}}>
            {choices.map(choice => dynamicChoiceUi(choice))}
            <button className="add-item" onClick={addNewChoice}>Add Choice</button>
            {/* <div className="choice-ans">
                <button className="add-item" onClick={addNewChoice}>Add Choice</button>
                <textarea style={{ opacity: 0.5}} className="choice-content" placeholder="Choice content..."></textarea>
            </div> */}
            {/* <div style={{boxSizing:'content-box', display: 'inline-flex', opacity: 0.3}}>
                <button className="add-item" onClick={addNewChoice}>Add Choice</button>
                {ChoiceLinkedUi(choices[0], updateAnswer, updateContent)}
            </div> */}
        </div>
    );
}