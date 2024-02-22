"use client";
import React, { useState } from "react";
import { SubmitPreSurvey } from "@/fetches/requests";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "next-client-cookies";

function Survey({ survey, uid, title, setFinished }) {
  const [body, setBody] = useState([]);
  const cookies = useCookies();

  // Queries
  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: SubmitPreSurvey,
    onSuccess: () => {
      setFinished(true);
      cookies.set("ready", uid);
    },
  });

  function runMutate(formData) {
    mutate(formData);
  }

  return (
    <div className="w-4/5 h-[500px] bg-slate-600 rounded-lg text-white px-14 items-center justify-center text-center flex flex-col overflow-hidden">
      <h1 className="text-amber-300 pb-10 uppercase font-bold my-5">{title}</h1>
      <form
        className="h-full w-full flex flex-col overflow-y-scroll"
        onSubmit={(_) => runMutate(body)}
      >
        {survey.map((survey, idx) => {
          var response = {
            questionNo: idx,
            userID: uid,
          };
          return (
            <div className="w-full h-20 flex flex-col my-6 rounded-lg bg-slate-500 text-white">
              {/* question */}
              <div className="flex gap-2">
                <h1># {idx}</h1>
                <h1>{survey.question}</h1>
              </div>
              {/* choices */}
              <select
                onChange={(e) =>
                  (response = { ...response, answer: e.currentTarget.value })
                }
              >
                {survey.choices.map((choice, idx) => {
                  <option value={idx}>{choice}</option>;
                })}
              </select>
              {/* user input */}
              <input
                className="w-full rounded px-2"
                onChange={(e) =>
                  (response = { ...response, input: e.currentTarget.value })
                }
              />

              {/* confirm answer */}
              <button
                className="w-8 h-5 rounded-sm text-white bg-green-600"
                onClick={(e) => {
                  setBody([...body, response]);
                }}
              >
                Confirm
              </button>
            </div>
          );
        })}
        <button type="submit" className="px-7 py-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Survey;
