"use client";

import Login from "../components/client/login";
import Survey from "@/components/client/survey";
import { GetConversations, GetFinalSurvey, GetTask } from "../fetches/requests";

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import AiProgram from "../components/markup/aiprogram";

export default function Home() {
  const [cookies, _] = useCookies(["ready"]);
  const [conversation, setConversation] = useState();
  const [finalSurvey, setFinalSurvey] = useState();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    if (cookies.ready) {
      GetConversations().then((res) => {
        setConversation(res.data);
      });

      GetFinalSurvey().then((res) => {
        setFinalSurvey(res.data);
      });

      GetTask().then((res) => {
        setTasks(res.data);
      });
    }
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 relative overflow-scroll">
      {cookies.ready ? (
        // User can access platform
        ShowAIProgram(
          conversation.data.frequency,
          tasks.data,
          conversation.data,
          cookies.ready,
          finalSurvey.data
        )
      ) : (
        // User needs to signup and do pre survey
        <Login />
      )}
    </main>
  );
}

function ShowAIProgram(frequency, tasks, conversation, uid, survey) {
  return (
    <>
      {frequency != 10 ? (
        <div className="w-full h-full">
          <AiProgram tasks={tasks} conversation={conversation} uid={uid} />
        </div>
      ) : (
        <div className="w-full h-full">{ShowFinalSurvey(uid, survey)}</div>
      )}
    </>
  );
}

function ShowFinalSurvey(uid, survey) {
  return (
    <>
      <Survey survey={survey} uid={uid} title={"Final Assesment Survey"} />
    </>
  );
}
