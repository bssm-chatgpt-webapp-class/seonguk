import { useState, useRef } from "react";
import { SendIcon } from "../index";
import "./StyleInput.css";

const TextField = ({ setQuestion }) => {
  const inputRef = useRef();
  return (
    <div className="text-field">
      <input ref={inputRef}></input>
      <SendIcon
        onClick={() => {
          console.log(inputRef.current.value);
          setQuestion(inputRef.current.value);
        }}
      />
    </div>
  );
};

export default TextField;
