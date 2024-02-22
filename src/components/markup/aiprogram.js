import React from "react";
import Btask from "./btask";
import Convo from "../client/conversation";
import Chat from "../client/chat";

function AiProgram({ tasks, conversation, uid }) {
  return (
    <>
      {/* BEGINNING TASK */}
      <Btask task={tasks.data.data} />

      {/* CONVERSATION  */}
      <Convo conversations={conversation.data.data.convo} />

      {/* CHAT */}
      <Chat uid={uid} />
    </>
  );
}

export default AiProgram;
