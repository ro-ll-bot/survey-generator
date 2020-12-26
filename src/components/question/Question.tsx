import { useEffect, useState } from 'react';
import { Choice, ChoiceGroupView } from '../choice/Choice'

function getQuestionView(id: number, choice: Choice[],
  questionInputHandler: (idx: number, data: string) => void) {

  return (
    <div>
      <textarea onChange={e => questionInputHandler(id, e.target.value)}></textarea>
      <span>lock</span>
      <ChoiceGroupView choiceList={choice} />
    </div>
  );
}

export interface QuestionProps {
  questionList: Question[];
}

export function QuestionGroupView(props: QuestionProps) {

  const [id, setId] = useState(0);
  const [questions, setQuestions] = useState<Question[]>(props.questionList);

  useEffect(() => {
    // render the screen when new question added.
  }, [questions]);

  const questionInputChange = (idx: number, data: string) => {
    questions[idx].question = data;
  };

  const addNewQuestion = () => {
    questions.push({id:id, question:"", choices: []});
    setId(id + 1);
    setQuestions(questions);
  }

  return (
    <div>
      {questions.map(question => {
        return getQuestionView(question.id, question.choices, questionInputChange);
      })}
      <button onClick={addNewQuestion}>Add Question</button>
    </div>
  );
}


export interface Question {
  id: number;
  choices: Choice[];
  question: string;
}

