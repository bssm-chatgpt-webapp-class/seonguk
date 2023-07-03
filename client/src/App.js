import React, { useState } from "react";
import { Header, MainText, TextField } from "./components/index";
import "./reset.css";
import { io } from "socket.io-client";

io("http://localhost:5000");

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
