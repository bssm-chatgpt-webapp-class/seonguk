import React, { useEffect, useState } from "react";
import { Header, MainText, TextField } from "./components/index";
import "./reset.css";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [question, setQuestion] = useState();
  const [chatMessages, setChatMessages] = useState([]);

  const sendChat = (message) => {
    setChatMessages((s) => [...s, { isMine: false, message }]);
    socket.emit("chat", message);
  };

  useEffect(() => {
    socket.on("chat", (data) => {
      setChatMessages((s) => [...s, { isMine: true, message: data }]);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <MainText chatMessages={chatMessages} />
      <TextField sendChat={sendChat} setQuestion={setQuestion} />
    </div>
  );
}

export default App;
