import { useState } from 'react';
import { QuestionType } from '../question/Question';
import { surveyState } from '../survey/Survey';
import { Choice, ChoiceProps } from './Choice';

const CHOICE_HINT: string = 'Write a choice...';

function ChoiceLinkedUi(choice: Choice, editable: boolean,
    updateAns: (idx: number, data: number[]) => void,
    updateContent: (idx: number, data: string) => void) {

    const updateLinkedContent = (data: string) => {
        const splitted: number[] = data.split(',').map(d => parseInt(d));
        updateAns(choice.id, splitted);
        splitted.forEach(idx => {
            console.log(`chosen ${idx}`);
            console.log(JSON.stringify(surveyState.results[idx]));
        });
    };

    return (
        <div className="choice-ans">
            <input
                className="choice-ans-linked"
                placeholder=""
                type="text"
                onChange={e => updateLinkedContent(e.target.value)} />

            <textarea className="choice-content"
                autoFocus={editable}
                placeholder={CHOICE_HINT}
                defaultValue={choice.content.toString()}
                onChange={e => updateContent(choice.id, e.target.value)} >

            </textarea>
        </div>
    );
}

function ChoiceRatedUi(choice: Choice, editable: boolean,
    updateAns: (idx: number, data: number) => void,
    updateContent: (idx: number, data: string) => void) {

    return (
        <div>
            <input className="choice-ans-rated" type="rate" onChange={e => updateAns(choice.id, parseInt(e.target.value))} />
            <input className="choice-content" type="text" autoFocus={true} onChange={e => updateContent(choice.id, e.target.value)} />
        </div>
    );
}

export default function CreateChoiceGroup(props: ChoiceProps) {
    const [id, setId] = useState(0);
    const [choices, setChoices] = useState<Choice[]>(props.choiceList);

    const updateAnswer = (idx: number, data: any) => {
        if (QuestionType.LINKED === props.type)
            choices[idx].linkedAnswers = data;
        if (QuestionType.RATED === props.type)
            choices[idx].rate = data;
    };

    const updateContent = (idx: number, data: string) => {
        choices[idx].content = data;
    };

    const addNewChoice = () => {
        const hasEmptyChoice = choices.some(choice => choice.content.toString().trim().length === 0);
        if (hasEmptyChoice) {
            alert('Please fill empty choices.');
            return;
        }

        choices.push({ id: id, linkedAnswers: [0], content: "" } as Choice);
        setId(id + 1);
        setChoices(choices);
    };

    const dynamicChoiceUi = (choice: Choice) => {
        if (QuestionType.LINKED === props.type)
            return ChoiceLinkedUi(choice, props.editable, updateAnswer, updateContent);
        if (QuestionType.RATED === props.type)
            return ChoiceRatedUi(choice, props.editable, updateAnswer, updateContent);
    };

    const pointerEvents = props.editable ? 'auto' : 'none';

    const userNavigatorShadowChoice = () => (
        <div className="choice-ans" style={{ opacity: 0.3 }} onClick={addNewChoice}>
            <input style={{ pointerEvents: 'none' }} tabIndex={-1} className="choice-ans-linked" placeholder="" type="text" />
            <textarea style={{ pointerEvents: 'none' }} tabIndex={-1} className="choice-content" placeholder={CHOICE_HINT}  ></textarea>
        </div>
    );

    return (
        <div style={{ pointerEvents: pointerEvents }}>
            {choices.map(choice => dynamicChoiceUi(choice))}
            {props.editable && userNavigatorShadowChoice()}
        </div>
    );
}