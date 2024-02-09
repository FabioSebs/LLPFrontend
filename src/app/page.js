import axios from "axios";
import Btask from "./components/btask";
import Login from "./components/login";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("uid");

  var uid = "";
  cookieStore.getAll().map((cookie) => {
    if (cookie.name == "uid") {
      uid = cookie.value;
    }
  });

  console.log(hasCookie);

  const tasks = await axios.get("http://localhost:8000/v1/questions/start");

  const makeConvo = async (chat) => {
    const res = await axios.post(
      `http://localhost:8000/v1/questions/create/${uid}`
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative overflow-scroll">
      {/* LOGIN */}
      {hasCookie ? (
        <>
          {/* BEGINNING TASK */}
          <Btask task={tasks.data.data} uid={uid} />
          {/* CHAT */}

          {/* USER INPUT  */}
          <Input />
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}
