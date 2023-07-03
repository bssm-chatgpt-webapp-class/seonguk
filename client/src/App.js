import React, { useState } from "react";
import { Header, MainText, TextField } from "./components/index";
import "./reset.css";

function App() {
  const [question, setQuestion] = useState();
  return (
    <div className="App">
      <Header />
      <MainText question={question} />
      <TextField setQuestion={setQuestion} />
    </div>
  );
}

export default App;
