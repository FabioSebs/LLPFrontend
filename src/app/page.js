import axios from "axios";
import Btask from "./components/btask";
import Login from "./components/login";
import { cookies } from "next/headers";
import Chat from "./components/chat";
import Convo from "./components/conversation";
import Survey from "./components/survey";

export default async function Home() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("uid");

  var uid = "";
  cookieStore.getAll().map((cookie) => {
    if (cookie.name == "uid") {
      uid = cookie.value;
    }
  });

  var tasks, conversation, survey;
  try {
    tasks = await axios.get(`${process.env.BACKEND_URL}/v1/questions/start`);
    conversation = await axios.get(
      `${process.env.BACKEND_URL}/v1/questions/conversation/${uid}`
    );
    survey = await axios.get(`${process.env.BACKEND_URL}/v1/survey/`);
  } catch (error) {
    console.log(error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative overflow-scroll">
      {/* LOGIN */}
      {hasCookie ? (
        <>
          {conversation.data.data.frequency == 0 ||
          conversation.data.data.frequency % 10 != 0 ? (
            // Can do 10 Questions
            <>
              {/* BEGINNING TASK */}
              <Btask task={tasks.data.data} />

              {/* CONVERSATION  */}
              <Convo conversations={conversation.data.data.convo} />

              {/* CHAT */}
              <Chat uid={uid} />
            </>
          ) : (
            <>
              <Survey uid={uid} survey={survey.data.data} />
            </>
          )}
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}
