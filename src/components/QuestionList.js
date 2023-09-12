import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions , handleDelete }) {

  
  const Questions = questions.map(question => <QuestionItem key={question.id} handleState={handleDelete} question={question}/>)
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{Questions}</ul>
    </section>
  );
}

export default QuestionList;
