import { useEffect, useState } from "react";
import { Question, QuestionProps, QuestionType } from "../question/Model";

export enum ChoiceType {
    CHOICE_SINGLE = "radio",
    CHOICE_MULTIPLE = "checkbox"
}

export enum ChoiceResultType {
    RATED,
    LINKED
}

interface ChoiceProps {
    choiceList: Choice[];
    type: QuestionType;
}

export interface Choice {
    id: number;
    groupId: string,
    rate?: number;
    content: string | ImageBitmap;
    type?: ChoiceType,
    resultType: ChoiceResultType;
    linkedAnswers?: number[];
}

function ChoiceUI(choice: Choice,
    inputHandler: (idx: number, data: string) => void,
    rateHandler: (idx: number, data: number) => void) {

    return (
        <div>
            <input className="choice-ans-rated" type="range" onChange={e => rateHandler(choice.id, parseInt(e.target.value))} />
            <input type="text" onChange={e => inputHandler(choice.id, e.target.value)} />
        </div>
    );
}

function ChoiceLinkedUi(choice: Choice, updateAns: (idx: number, data: string) => void, updateChoice: (idx: number, data: string) => void) {

    return (
        <div className="choice-ans">
            <input className="choice-ans-linked" type="text" onChange={e => updateAns(choice.id, e.target.value)} />
            <input type="text" onChange={e => updateChoice(choice.id, e.target.value)} />
        </div>
    );
}

export function ChoiceGroupList(props: ChoiceProps) {

    // const [choiceStates, setChoiceStates] = useState<boolean[]>([]);

    const choiceUI = (choice: Choice) => {
        return (
            <div className="choice">
                <input type={choice.type} name={choice.groupId} />
                <p>{choice.content}</p>
            </div>
        )
    };

    return (
        <div >
            {props.choiceList.map(choice => choiceUI(choice))}
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
                return ChoiceUI(choice, updateChoiceInputData, updateChoiceRateData);
            })}
            <button onClick={addNewChoice}>Add Choice</button>
        </div>
    );
}
