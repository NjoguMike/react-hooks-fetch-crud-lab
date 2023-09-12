import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  const fetchQuestions = ()=>{

    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
  }

  useEffect(
    ()=> fetchQuestions(),
    []
  )
  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleState={fetchQuestions}/> : <QuestionList handleDelete={fetchQuestions} questions={questions}/>}
    </main>
  );
}

export default App;
