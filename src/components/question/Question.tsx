import { useEffect, useState } from 'react';
import { ChoiceGroup, ChoiceGroupList } from '../choice/Choice'
import CreateChoiceGroup from '../choice/CreateChoice';
import { Question, QuestionType, QuestionProps } from './Model';
import UNLOCK from '../../ui/assets/unlock.png';
import PADLOCK from '../../ui/assets/padlock.png';

function QuestionUI(question: Question, updateQContent: (idx: number, data: string) => void, setQLock: (qIdx: number) => void) {

    return (
        <div className="question-container">
            <textarea className="question-content" placeholder="Question content..." onChange={e => updateQContent(question.id, e.target.value)}></textarea>
            <img className="question-img" src={question.isLock?PADLOCK:UNLOCK} onClick={()=> setQLock(question.id)}/>
            <CreateChoiceGroup type={QuestionType.LINKED} choiceList={question.choices} />
        </div>
    );
}

export function QuestionGroup(props: QuestionProps) {

    const [id, setId] = useState(0);
    const [questions, setQuestions] = useState<Question[]>(props.questionList);
    const [lock, setLock] = useState(false);

    useEffect(() => {
        // render the screen when new question added.
    }, [questions, lock]);

    const questionInputChange = (idx: number, data: string) => {
        questions[idx].question = data;
    };

    const setQLock = (qIdx: number) => {
        questions[qIdx].isLock = !questions[qIdx].isLock;
        setLock(!lock);
    }

    const addNewQuestion = () => {
        questions.push({ id: id, question: "", choices: [], isLock: false, type: QuestionType.RATED });
        setId(id + 1);
        setQuestions(questions);
    }

    return (
        <div>
            {questions.map(question => {
                console.log('rendered');
                return QuestionUI(question, questionInputChange, setQLock);
            })}
            <button onClick={addNewQuestion}>Add Question</button>
        </div>
    );
}


export function QuestionGroupList(props: QuestionProps) {

    const QuestionListUI = (question: Question) => {
        return (
            <div className="question-container">
                <p>{question.question}</p>
                <ChoiceGroupList type={question.type} choiceList={question.choices} />
            </div>
        );
    };

    return (
        <div>
            {props.questionList.map(question => QuestionListUI(question))}
        </div>
    )
}
