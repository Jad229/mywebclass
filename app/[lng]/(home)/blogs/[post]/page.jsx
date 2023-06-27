import { getPost } from "@/sanity/sanity-utils";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Post",
  description: "Post Page",
};

export default async function Post({ params }) {
  const slug = params.post;
  const post = await getPost(slug);

  return (
    <section
      id="post-section"
      className="my-10 px-10 md:px-24 space-y-12 max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-center text-center items-center max-w-full space-y-5 md:space-x-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-black text-mwc-blue">{post.title}</h1>
        </div>
        <div className="w-full md:w-1/2">
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              width={450}
              height={300}
              className="mx-auto object-cover rounded-lg border border-gray-500"
            />
          )}
        </div>
      </div>
      <p className="tracking-wide text-teal-800">{post.excerpt}</p>
      <p className="tracking-wide text-teal-800">{post.content}</p>
    </section>
  );
}
