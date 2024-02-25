"use client";

import Login from "../components/client/login";
import Survey from "@/components/client/survey";
import { CirclesWithBar } from "react-loader-spinner";
import { GetConversations, GetFinalSurvey, GetTask } from "../fetches/requests";

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import AiProgram from "../components/markup/aiprogram";

const defaultTemplate = {
  frequency: 0,
};

export default function Home() {
  const [cookies, _] = useCookies(["finished"]);
  const [loader, setLoader] = useState(false);
  const [conversation, setConversation] = useState(defaultTemplate);
  const [finalSurvey, setFinalSurvey] = useState(defaultTemplate);
  const [tasks, setTasks] = useState(defaultTemplate);

  useEffect(() => {
    if (cookies.finished) {
      setLoader(true);

      GetConversations().then((res) => {
        setConversation(res.data);
      });

      GetFinalSurvey().then((res) => {
        setFinalSurvey(res.data);
      });

      GetTask()
        .then((res) => {
          setTasks(res.data);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 relative overflow-scroll">
      {cookies.finished ? (
        loader ? (
          Loading()
        ) : (
          // User can access platform
          ShowAIProgram(
            conversation.frequency,
            tasks,
            conversation,
            cookies,
            finalSurvey
          )
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

function Loading() {
  return (
    <div className="h-[500px] w-[250px] flex flex-col gap-3 items-center">
      <CirclesWithBar
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </div>
  );
}
