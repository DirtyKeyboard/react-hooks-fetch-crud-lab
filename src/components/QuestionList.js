import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, deleteQuestion}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(el => (<QuestionItem key={el.id} deleteQuestion={deleteQuestion} question={el}/>))}</ul>
    </section>
  );
}

export default QuestionList;
