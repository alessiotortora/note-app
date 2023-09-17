import Link from "next/link";
import RemoveBtn from "./removeBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Topics() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic) => (
        <div className="p-4 border border-slate-400 my-3 flex justify-between gap-5">
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2 items-center">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
