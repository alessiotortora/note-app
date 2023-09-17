import EditForm from "@/app/components/editForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to the fetch");
    }
    return res.json();
  } catch (error) {
    console.log();
  }
};
export default async function EditTopic({ params }) {
  const { id } = params;

  const {topic}  = await getTopicById(id);
  const { title, description } = topic;

  return <EditForm id={id} title={title} description={description} />;
}
