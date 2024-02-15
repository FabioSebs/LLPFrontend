import Login from "./components/login";
import { cookies } from "next/headers";
import Survey from "./components/survey";
import { GetConversations, GetSurvey, GetTask } from "../../lib/requests";
import AiProgram from "./components/aiprogram";

export default async function Home() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("uid");

  var uid = "";
  cookieStore.getAll().map((cookie) => {
    if (cookie.name == "uid") {
      uid = cookie.value;
    }
  });

  var conversation, survey, tasks;
  try {
    conversation = await GetConversations(uid);
    survey = await GetSurvey();
    tasks = await GetTask();
  } catch (error) {
    console.log(error);
  }

  console.log(conversation.data.data.frequency);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 relative overflow-scroll">
      {/* LOGIN */}
      {hasCookie ? (
        <>
          {conversation.data.data.frequency != 10 ? (
            <div className="w-full h-full">
              <AiProgram tasks={tasks} conversation={conversation} uid={uid} />
            </div>
          ) : (
            <div className="w-full h-full">
              <Survey uid={uid} survey={survey.data.data} />
            </div>
          )}
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}
