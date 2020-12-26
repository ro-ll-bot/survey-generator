import { useEffect, useState } from 'react';
import { Choice, ChoiceGroup } from '../choice/Choice'

export interface Question {
  id: number;
  choices: Choice[];
  question: string;
  type: "GENERATE" | "LIST";
}

function QuestionUI(question: Question,
  questionEventHandler: (idx: number, data: string) => void) {

  return (
    <div>
      <textarea onChange={e => questionEventHandler(question.id, e.target.value)}></textarea>
      <span>lock</span>
      <ChoiceGroup choiceList={question.choices} />
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
    questions.push({ id: id, question: "", choices: [], type: "GENERATE" });
    setId(id + 1);
    setQuestions(questions);
  }

  return (
    <div>
      {questions.map(question => {
        return QuestionUI(question, questionInputChange);
      })}
      <button onClick={addNewQuestion}>Add Question</button>
    </div>
  );
}
