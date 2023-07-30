import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>

    {/* consider Tailwind Pro's classes and Tailwind's Topography plugin to get more style and control over portable text */}
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
