import React from "react";
import { Suspense } from "react";
import Loading from "../loading";

function Convo({ conversations }) {
  return (
    <>
      {conversations ? (
        <div className="h-[350px] w-3/4 overflow-y-scroll flex flex-col bg-orange-200 rounded-lg px-10 my-10">
          <ConvoList conversations={conversations} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

function ConvoList({ conversations }) {
  return (
    <Suspense fallback={<Loading />}>
      {conversations.map((convo) => {
        return (
          <>
            <div className="flex flex-col w-full">
              <div className="bg-slate-500 text-white rounded-lg w-auto h-auto p-2 my-3 border-black border-2">
                {convo.question}
              </div>
              <div className="bg-yellow-300 text-black rounded-lg h-auto p-2 my-3 border-black border-2">
                AI : {convo.response}
              </div>
            </div>
          </>
        );
      })}
    </Suspense>
  );
}

export default Convo;
