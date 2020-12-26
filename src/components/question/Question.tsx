import { useEffect, useState } from 'react';
import { Choice, ChoiceGroup } from '../choice/Choice'

export interface Question {
  id: number;
  choices: Choice[];
  question: string;
}

function getQuestionUI(id: number, choice: Choice[],
  questionInputHandler: (idx: number, data: string) => void) {

  return (
    <div>
      <textarea onChange={e => questionInputHandler(id, e.target.value)}></textarea>
      <span>lock</span>
      <ChoiceGroup choiceList={choice} />
    </div>
  );
}
export interface QuestionProps {
  questionList: Question[];
}

export function QuestionGroup(props: QuestionProps) {

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
        return getQuestionUI(question.id, question.choices, questionInputChange);
      })}
      <button onClick={addNewQuestion}>Add Question</button>
    </div>
  );
}
