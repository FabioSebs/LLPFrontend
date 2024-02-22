"use client";
import { useState } from "react";
import { revalidatePath } from "next/cache";
import { ContinueConversation } from "@/fetches/requests";
import { useMutation } from "@tanstack/react-query";

function Chat({ uid }) {
  const [formData, setFormData] = useState({
    uid,
  });

  // Queries
  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: ContinueConversation,
  });

  function runMutate(formData) {
    mutate(formData);
  }

  return (
    <form
      className="flex w-full h-16 items-center justify-center gap-3"
      onSubmit={() => runMutate(formData)}
    >
      <button
        type="submit"
        className="w-1/5 h-14 bg-yellow-300 text-white flex justify-center items-center text-center hover:scale-110 scale-100 transition-all duration-100 rounded-xl"
      >
        ➡️
      </button>

      <input
        className="w-4/5 h-14 px-3 border-black rounded-lg bg-slate-500 text-white"
        onChange={(e) =>
          setQuestion({ ...formData, question: e.currentTarget.value })
        }
        placeholder="Type your response here!"
      />
    </form>
  );
}

export default Chat;
