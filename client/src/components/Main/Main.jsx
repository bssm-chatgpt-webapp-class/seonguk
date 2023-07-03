import "./MainStyle.css";
import { profileImageLink, ChatgptRespose } from "../../fixtrues";
import ChatItem from "../chatItem/ChatItem";

const Main = ({ chatMessages }) => {
  return (
    <div className="main">
      {chatMessages.map((message) => {
        return (
          <>
            {message.isMine ? (
              <ChatItem imageLink={profileImageLink} text={message.message} />
            ) : (
              <ChatItem
                imageLink="/images/chatgpt.png"
                text={message.message}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Main;
