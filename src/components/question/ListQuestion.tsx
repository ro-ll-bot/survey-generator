import React, { useEffect, useState } from 'react';
import { Question, QuestionProps } from './Question';
import {ChoiceGroupList} from '../choice/ListChoice'


export function QuestionGroupList(props: QuestionProps) {

  const QuestionListUI = (question: Question) => {
    return (
      <div className="question-container">
        <p><b>{question.id}.) {question.question} </b></p>
        <ChoiceGroupList choiceList={question.choices} type={question.type} editable={false}/>
      </div>
    );
  };

  return (
    <div>
      {props.questionList.map(question => QuestionListUI(question))}
    </div>
  )
}
