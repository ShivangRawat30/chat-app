import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";

const StandardMessageForms = ({ props, activeChat }) => {
  const [message, setMaessage] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleChange = (e) => {
    setMaessage(e.target.value);
  };

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("z", `${Math.floor(Math.random() * 1000)} + 00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    setMaessage("");
    setAttachment("");
  };
  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default StandardMessageForms;
