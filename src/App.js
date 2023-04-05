import React, { useState, useEffect } from "react";
import "./App.css";
import Messages from "./Messages";
import Input from "./Input";
import RandomName from "./RandomName";
import RandomAvatar from "./RandomAvatar";

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: RandomName(),
    avatar: RandomAvatar(),
  });
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const drone = new window.Scaledrone("nLTfOV9kNnQg2ngt", {
      data: member,
    });

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }

      const newMember = { ...member };
      newMember.id = drone.clientId;

      setMember(newMember);
      setDrone(drone);
    });

    return () => {
      drone.close();
    };
  }, []);

  useEffect(() => {
    if (!drone) {
      return;
    }

    const room = drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      setMessages((prevMessages) => [...prevMessages, { member, text: data }]);
    });
  }, [drone]);

  const onMessageSend = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div className="body">
      <div className="header">
        <h1>Scaledrone Chat App</h1>
      </div>
      <div className="background-div">
        <Messages messages={messages} currentMember={member} />
        <Input onMessageSend={onMessageSend} />
      </div>
    </div>
  );
}

export default App;
