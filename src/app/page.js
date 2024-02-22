"use client";

import Login from "../components/client/login";
import Survey from "@/components/client/survey";
import {
  GetConversations,
  GetFinalSurvey,
  GetPreSurvey,
  GetTask,
} from "../fetches/requests";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "next-client-cookies";

import AiProgram from "../components/markup/aiprogram";

export default function Home() {
  const cookies = useCookies();
  const userID = cookies.get("ready");

  var conversation, finalSurvey, tasks, preSurvey;
  if (userID) {
    conversations = useQuery({
      queryKey: "convo",
      queryFn: () => {
        GetConversations().then((res) => {
          return res.data;
        });
      },
    });

    finalSurvey = useQuery({
      queryKey: "final",
      queryFn: () => {
        GetFinalSurvey().then((res) => {
          return res.data;
        });
      },
    });

    tasks = useQuery({
      queryKey: "tasks",
      queryFn: () => {
        GetTask().then((res) => {
          return res.data;
        });
      },
    });
  } else {
    preSurvey = useQuery({
      queryKey: "pre",
      queryFn: () => {
        GetPreSurvey().then((res) => {
          return res.data;
        });
      },
    });
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 relative overflow-scroll">
      {userID ? (
        // User can access platform
        ShowAIProgram(
          conversation.data.frequency,
          tasks,
          conversation,
          uid,
          finalSurvey
        )
      ) : (
        // User needs to signup and do pre survey
        <Login survey={preSurvey} />
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
        <div className="w-full h-full">{ShowFinalSurvey(uid, survey.data)}</div>
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
