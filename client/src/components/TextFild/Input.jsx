import { useState, useRef } from "react";
import { SendIcon } from "../index";
import "./StyleInput.css";

const TextField = ({ setQuestion, sendChat }) => {
  const inputRef = useRef();
  return (
    <div className="text-field">
      <input ref={inputRef}></input>
      <SendIcon
        onClick={() => {
          sendChat(inputRef.current.value);
        }}
      />
    </div>
  );
};

export default TextField;
