"use client";

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { CreateUser } from "@/fetches/requests";
import { CirclesWithBar } from "react-loader-spinner";
import Survey from "@/components/client/survey";
import Image from "next/image";

function Login() {
  const [formData, setFormData] = useState({});
  const [cookies, setCookie] = useCookies(["user", "finished"]);

  // Queries
  function handleSignup() {
    CreateUser(formData).then((res) => {
      console.log(res);
      setCookie("user", res.data);
    });
  }

  function ShowPreSurvey(uid) {
    return (
      <div className="w-full h-full flex justify-center">
        <Survey uid={uid} title={"Pre Assesment Survey"} />
      </div>
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
          onClick={(_) => {
            handleSignup();
          }}
        >
          Signup
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center">
      {cookies.finished
        ? Loading()
        : cookies.user
        ? ShowPreSurvey(cookies.user)
        : Form()}
    </div>
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
