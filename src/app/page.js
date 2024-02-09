import axios from "axios";
import Btask from "./components/btask";
import Login from "./components/login";
import { cookies } from "next/headers";
import Chat from "./components/chat";
import Convo from "./components/conversation";

export default async function Home() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("uid");

  var uid = "";
  cookieStore.getAll().map((cookie) => {
    if (cookie.name == "uid") {
      uid = cookie.value;
    }
  });

  const tasks = await axios.get("http://localhost:8000/v1/questions/start");
  const conversation = await axios.get(`http://localhost:8000/v1/questions/conversation/${uid}`)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative overflow-scroll">
      {/* LOGIN */}
      {hasCookie ? (
        <>
          {/* BEGINNING TASK */}
          <Btask task={tasks.data.data} />
          
          {/* CONVERSATION  */}
          <Convo conversations={conversation}/>

          {/* CHAT */}
          <Chat uid={uid}/>
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}
