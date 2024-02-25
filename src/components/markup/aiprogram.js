import React from "react";
import Btask from "./btask";
import Convo from "../client/conversation";
import Chat from "../client/chat";

function AiProgram({ tasks, conversation, uid }) {
  return (
    <div className="h-full w-full flex flex-col gap-7">
      {/* BEGINNING TASK */}
      <Btask task={tasks} />

      {/* CONVERSATION  */}
      <Convo conversations={conversation.convo} />

      {/* CHAT */}
      <Chat uid={uid} />
    </div>
  );
}

export default AiProgram;
