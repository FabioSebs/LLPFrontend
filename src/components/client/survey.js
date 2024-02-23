"use client";
import React, { useEffect, useState, useMemo } from "react";
import { SubmitPreSurvey } from "@/fetches/requests";
import { useCookies } from "react-cookie";
import { GetPreSurvey } from "@/fetches/requests";

function Survey({ uid, title }) {
  const [survey, setSurvey] = useState([]);
  const [body, setBody] = useState([]);
  const [cookies, setCookie] = useCookies(["ready", "finished"]);

  // get survey questions
  useMemo(() => {
    GetPreSurvey().then((res) => {
      console.log(res);
      setSurvey(res.data);
    });
  }, []);

  // post survey questions
  function handleSurveyForm() {
    SubmitPreSurvey(body).then((res) => {
      console.log(res);
      setCookie("finished", 1);
    });
  }

  return (
    <div className="w-4/5 h-[500px] bg-slate-600 rounded-lg px-9 items-center justify-center text-center flex flex-col overflow-hidden text-amber-300 pb-10 uppercase font-bold">
      <div>
        <h1 className="text-amber-300 pb-10 uppercase font-bold my-5">
          {title}
        </h1>
      </div>
      <div className="h-full w-full flex flex-col overflow-y-scroll">
        {survey.map((survey, idx) => {
          // initial resp
          var response = {
            questionNo: idx,
            userID: uid,
            type: "pre",
          };

          //form
          return (
            <div className="w-full h-20 flex flex-col rounded-lg bg-orange-600 text-white my-12">
              {/* question */}
              <div className="flex gap-2 text-black justify-center w-full py-3">
                <h1>{"# " + idx}</h1>
                <h1 className="italic">{survey.question}</h1>
              </div>

              {/* choices */}
              <div className="flex w-full">
                {survey.choices ? (
                  <div>
                    <select
                      onChange={(e) =>
                        (response = {
                          ...response,
                          answer: e.currentTarget.value,
                        })
                      }
                    >
                      {survey.choices.map((choice, idx) => {
                        <option value={idx}>{choice}</option>;
                      })}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              {/* user input */}
              <div className="w-full">
                <input
                  className="w-full px-2 text-black"
                  onChange={(e) =>
                    (response = { ...response, input: e.currentTarget.value })
                  }
                />
              </div>

              {/* confirm answer */}
              <div className="w-full flex justify-center items-center">
                <button
                  className="w-24 h-10 rounded-sm text-white bg-green-600"
                  onClick={(e) => {
                    setBody([...body, response]);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          );
        })}
        <button
          className="px-7 py-4"
          onClick={() => {
            handleSurveyForm();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Survey;
