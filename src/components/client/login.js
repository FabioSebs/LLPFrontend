"use client";

import { useState } from "react";
import { useCookies } from "next-client-cookies";
import { CreateUser } from "@/fetches/requests";
import { useMutation } from "@tanstack/react-query";
import { CirclesWithBar } from "react-loader-spinner";

function Login() {
  const [formData, setFormData] = useState({});

  const cookies = useCookies();

  // Queries
  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: CreateUser,
    onSuccess: (data) => {
      cookies.set(data.data, data.data);
    },
  });

  function runMutate(formData) {
    mutate(formData);
  }

  function Form() {
    return (
      <form
        className="h-[500px] w-[250px] flex flex-col gap-3 items-center"
        onSubmit={(_) => runMutate(formData)}
      >
        <h1>Create Account</h1>
        {/* username */}
        <div className="flex flex-col items-center justify-center text-center">
          <label>username</label>
          <input
            className="text-center"
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
            className="text-center"
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
            className="text-center"
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.currentTarget.value })
            }
          />
        </div>

        <button
          type="submit"
          className="h-10 w-16 text-yellow-300 bg-slate-500"
        >
          Signup
        </button>
      </form>
    );
  }

  return <>{isPending ? Loading() : Form()}</>;
}

function Loading() {
  return (
    <form className="h-[500px] w-[250px] flex flex-col gap-3 items-center">
      <CirclesWithBar
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </form>
  );
}

// TODO:
function Error() {
  return (
    <form className="h-[500px] w-[250px] flex flex-col gap-3 items-center">
      <CirclesWithBar
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </form>
  );
}
export default Login;
