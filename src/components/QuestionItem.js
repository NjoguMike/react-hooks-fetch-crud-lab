import React from "react";

function QuestionItem({ question , handleState }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(event){
    const deleteId = event.target.id
    
    fetch(`http://localhost:4000/questions/${deleteId}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(response => response.json())
    .then(()=> handleState())
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={id} onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
