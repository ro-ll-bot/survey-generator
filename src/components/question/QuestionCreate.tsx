import { useEffect, useState } from "react";
import { QuestionProps, Question, QuestionType } from "./Model";
import { ChoiceGroup } from '../choice/Choice';

export default function QuestionCreate(props: QuestionProps) {

    const [id, setId] = useState(0);
    const [questions, setQuestions] = useState<Question[]>(props.questionList);

    useEffect(() => {

    }, [questions]);

    const questionInputChange = (idx: number, data: string) => {
        questions[idx].question = data;
    };

    const addQuestion = () => {
        questions.push({ id: id, question: "", choices: [], isLock:false, type: QuestionType.RATED });
        setId(id + 1);
        setQuestions(questions);
    }

    return (
        <div>
            {questions.map(question => {
                return QuestionUI(question, questionInputChange);
            })}
            <button onClick={addQuestion}>Add Question</button>
        </div>
    );
}


function QuestionUI(question: Question, qInpChange: (id: number, data: string) => void) {

    return (
        <div>
            <textarea onChange={e => qInpChange(question.id, e.target.value)}></textarea>
            <span>lock</span>
            <ChoiceGroup type={question.type} choiceList={question.choices} />
        </div>
    );
}