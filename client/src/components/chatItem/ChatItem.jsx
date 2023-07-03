import "./ChatStyle.css";

const ChatItem = ({ imageLink, text }) => {
  return (
    <div className="chatItem">
      <img className="question-profile" src={imageLink} />
      <pre>{text}</pre>
    </div>
  );
};

export default ChatItem;
