import React from "react";

function Messages(props) {
  const { messages, currentMember } = props;

  const renderMessage = (message) => {
    const { member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const currentMemberClassName = messageFromMe
      ? "message currentMember"
      : "message";
    return (
      <li key={Math.random()} className={currentMemberClassName}>
        <div
          className="avatar"
          style={{
            backgroundImage: `url("${member.clientData.avatar}")`,
            backgroundSize: "contain",
          }}
        />
        <div className="content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  };

  return <ul className="messages">{messages.map((m) => renderMessage(m))}</ul>;
}

export default Messages;
