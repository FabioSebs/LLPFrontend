import React from "react";
import Btask from "./btask";
import Convo from "./conversation";
import Chat from "./chat";

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
