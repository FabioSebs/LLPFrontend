import Login from "../components/client/login";
import { cookies } from "next/headers";
import Survey from "../components/server/survey";
import {
  GetConversations,
  GetFinalSurvey,
  GetPreSurvey,
  GetTask,
} from "../fetches/requests";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AiProgram from "../components/markup/aiprogram";

const loginClient = new QueryClient();

export default async function Home() {
  const [uid, hasCookie] = getUIDCookie();

  const conversation = await GetConversations(uid);
  const preSurvey = await GetPreSurvey();
  const finalSurvey = await GetFinalSurvey();
  const tasks = await GetTask();

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 relative overflow-scroll">
      {hasCookie ? (
        <>
          {conversation.data.frequency != 10 ? (
            <div className="w-full h-full">
              <AiProgram tasks={tasks} conversation={conversation} uid={uid} />
            </div>
          ) : (
            <div className="w-full h-full">
              <Survey uid={uid} survey={survey.data} />
            </div>
          )}
        </>
      ) : (
        <QueryClientProvider client={loginClient}>
          <Login />
        </QueryClientProvider>
      )}
    </main>
  );
}

function ShowPreSurvey() {
  return <></>;
}

function ShowAIProgram() {
  return <></>;
}

function ShowFinalSurvey() {
  return <></>;
}

function getUIDCookie() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("uid");

  var uid = "";
  cookieStore.getAll().map((cookie) => {
    if (cookie.name == "uid") {
      uid = cookie.value;
    }
  });
  return [uid, hasCookie];
}
