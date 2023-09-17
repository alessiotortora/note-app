"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("add values");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("failed to created topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="title"
      />
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="border border-slate-500 px-8 py-2"
        type="text"
        value={description}
        placeholder="description"
      />
      <button type="submit" className="bg-red-500 font-bold p-2 w-fit">
        Add topic
      </button>
    </form>
  );
}
