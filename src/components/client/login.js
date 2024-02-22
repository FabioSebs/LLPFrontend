"use client";

import { useState, useEffect } from "react";
import { useCookies } from "next-client-cookies";
import { CreateUser } from "@/fetches/requests";
import { useMutation } from "@tanstack/react-query";
import { CirclesWithBar } from "react-loader-spinner";
import Survey from "@/components/client/survey";
import Image from "next/image";

function Login({ survey }) {
  const [formData, setFormData] = useState({});
  const [finished, setFinished] = useState(false);
  const cookies = useCookies();
  const userID = cookies.get("user");

  // Queries
  const signupUserQuery = useMutation({
    mutationFn: (data) => {
      CreateUser(data).then((res) => {
        return res.json();
      });
    },
    onSuccess: (res) => {
      cookies.set("user", res.data);
    },
  });

  function ShowPreSurvey(uid, survey, setFinished) {
    return (
      <>
        <Survey
          survey={survey.data}
          uid={uid}
          title={"Pre Assesment Survey"}
          setFinished={setFinished}
        />
      </>
    );
  }

  function Form() {
    return (
      <div className="h-[500px] w-[500px] flex flex-col gap-3 items-center bg-gray-500 shadow-2xl shadow-black text-white rounded-xl justify-center relative">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Picture of binus"
          className="absolute top-0"
        />
        <h1 className="text-2xl text-yellow-400 mt-10">Create Account</h1>
        {/* username */}
        <div className="flex flex-col items-center justify-center text-center">
          <label>username</label>
          <input
            className="text-center text-black"
            name="username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.currentTarget.value })
            }
          />
        </div>
        {/* age */}
        <div className="flex flex-col items-center justify-center text-center">
          <label>age</label>
          <input
            className="text-center text-black"
            name="age"
            onChange={(e) =>
              setFormData({ ...formData, age: e.currentTarget.value })
            }
          />
        </div>

        {/* email */}
        <div className="flex flex-col items-center justify-center text-center">
          <label>email</label>
          <input
            className="text-center text-black"
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.currentTarget.value })
            }
          />
        </div>

        <button
          className="h-10 w-20 text-green-300 bg-slate-500 hover:scale-105 rounded-xl mt-10 outline"
          onClick={(e) => {
            e.preventDefault();
            console.log(formData);
            signupUserQuery.mutate(formData);
          }}
        >
          Signup
        </button>
      </div>
    );
  }

  return (
    <>
      {userID
        ? Loading()
        : finished
        ? ShowPreSurvey(userID, survey, setFinished)
        : Form()}
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

// TODO:
function Error() {
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

export default Login;
