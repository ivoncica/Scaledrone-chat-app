import React, { useState } from "react";

function Input(props) {
  const [text, setText] = useState("");

  function sendMessageHandler(event) {
    event.preventDefault();
    setText("");
    props.onMessageSend(text);
  }

  return (
    <div className="Input">
      <form onSubmit={sendMessageHandler}>
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          type="text"
          placeholder="Za slanje poruke stisnite ENTER"
          autofocus="true"
        />
        <button>Pošalji</button>
      </form>
    </div>
  );
}

export default Input;
