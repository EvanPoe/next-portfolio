import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "b2jwt6no",
    dataset: "production",
    apiVersion: "2023-07-25",
  });

  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            alt,
            url,
            content
        }`
  );
}
