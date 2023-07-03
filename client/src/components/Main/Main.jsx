import "./MainStyle.css";
import { profileImageLink, ChatgptRespose } from "../../fixtrues";
import ChatItem from "../chatItem/ChatItem";

const Main = ({ question }) => {
  return (
    <div className="main">
      <ChatItem imageLink={profileImageLink} text={question} />
      <ChatItem imageLink="/images/chatgpt.png" text="" />
    </div>
  );
};

export default Main;
