import { useEffect, useState } from 'react';
import { Question, QuestionType, QuestionProps } from './Question';
import { FaLock, FaUnlock, FaChevronDown, FaChevronRight } from 'react-icons/fa';

import CreateChoiceGroup from '../choice/CreateChoice';

const QUESTION_HINT: string = 'Write a question...';


function QuestionUI(question: Question,
    updateQContent: (idx: number, data: string) => void,
    setQLock: (qIdx: number) => void,
    setQCollapse: (qIdx: number) => void) {

    const pointerEvents = question.isLock ? 'none' : 'auto';
    const opacity = question.isLock ? 0.6 : 1;

    const collapsedQuestion = () => {

        const getDynamicQuestionContent = (): string => {
            const contentLength = (window.innerWidth / 200) * 10;
            return question.question.substr(0, contentLength);
        };


        return (
            <div>
                <div className="question-create-container">
                    <FaChevronDown className="question-create-collapse-icon" onClick={() => setQCollapse(question.id)}>
                    </FaChevronDown>
                    <h2 className="question-create-collapse-header">{getDynamicQuestionContent()}</h2>
                </div>
                <hr style={{ marginLeft: '15%', marginRight: '15%' }}></hr>
            </div>
        );
    };

    const getLockIcon = () => {
        const click = () => setQLock(question.id);
        const clazz = "question-create-collapse-icon";

        if (!question.isLock) return <FaUnlock className={clazz} onClick={click}></FaUnlock>
        return <FaLock className={clazz} onClick={click}></FaLock>
    }

    const extendedQuestion = () => {
        return (<div style={{ opacity: opacity }}>
            <div style={{ marginLeft: '15%', marginRight: '15%' }}>
                <FaChevronRight className="question-create-collapse-icon" onClick={() => setQCollapse(question.id)}>
                </FaChevronRight>
                {getLockIcon()}
                <hr></hr>
                <textarea
                    autoFocus={!question.isLock}
                    className="question-content"
                    style={{ pointerEvents: pointerEvents }}
                    placeholder={QUESTION_HINT}
                    defaultValue={question.question}
                    onChange={e => updateQContent(question.id, e.target.value)}>

                </textarea>
            </div>
            <CreateChoiceGroup type={QuestionType.LINKED} editable={!question.isLock} choiceList={question.choices} />
        </div>);
    }

    return (
        <div>
            {question.isCollapsed ? collapsedQuestion() : extendedQuestion()}
        </div>
    );
}

export default function CreateQuestionGroup(props: QuestionProps) {

    const [id, setId] = useState(0);
    const [questions, setQuestions] = useState<Question[]>(props.questionList);
    const [lock, setLock] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Track screen width to reArrange question content length when it is collapsed.
    const setWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', setWidth);

    useEffect(() => {
        // render the screen when new question added.
    }, [questions]);

    useEffect(()=>{
        return window.removeEventListener('resize', setWidth);
    }, [screenWidth]);

    const questionInputChange = (idx: number, data: string) => {
        questions[idx].question = data;
    };

    const setQLock = (qIdx: number) => {
        questions[qIdx].isLock = !questions[qIdx].isLock;
        setLock(!lock);
    };

    const setQCollapse = (qIdx: number) => {
        questions[qIdx].isCollapsed = !questions[qIdx].isCollapsed;
        setCollapse(!collapse);
    };

    const addNewQuestion = () => {
        // don't create questions if empty content exist inside any questions
        const isEmptyContentExists = questions.some(question => question.question.trim().length === 0);
        if (isEmptyContentExists) {
            alert('Fill empty questions');
            return;
        }

        questions.push({ id: id, question: "", choices: [], isLock: false, isCollapsed: false, type: QuestionType.RATED });
        setId(id + 1);
        setQuestions(questions);
    }

    return (
        <div>
            {questions.map(question => QuestionUI(question, questionInputChange, setQLock, setQCollapse))}
            <div style={{ opacity: 0.3, marginLeft: '15%', marginRight: '15%', marginTop: '1rem' }} onClick={addNewQuestion}>
                <textarea style={{ pointerEvents: 'none' }} contentEditable={false} value={""} tabIndex={-1} className="question-content" placeholder={QUESTION_HINT} ></textarea>
            </div>
        </div>
    );
}
