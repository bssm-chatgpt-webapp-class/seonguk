import React from "react";
import { HambugIcon, PlusIcon } from "../../icons";
import "./StyleHeader.css";

const Header = () => {
  return (
    <div className="header">
      <HambugIcon />
      <div>New Chat</div>
      <PlusIcon />
    </div>
  );
};

export default Header;
