import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  useEffect(async() => {
    const raw = await fetch('http://localhost:4000/questions')
    const data = await raw.json()
    setQuestions(data);
  },[])
  function deleteQuestion(id)
  {
    const newQuestions = questions.filter(el => (el.id !== id))
    setQuestions(newQuestions)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestions={setQuestions}/> : <QuestionList questions={questions} deleteQuestion={deleteQuestion}/>}
    </main>
  );
}

export default App;
