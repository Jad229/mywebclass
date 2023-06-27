import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "@/app/i18n";

export const metadata = {
  title: "Blogs",
  description: "Blogs Page",
};

export default async function BlogPage({ params: { lng } }) {
  const posts = await getPosts();
  const { t } = await useTranslation(lng, "blogs");
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <h1 className="text-7xl font-extrabold">
        {t("welcome")}

        <span className="bg-gradient-to-r from-mwc-blue to-cyan-600 bg-clip-text text-transparent">
          {t("blog")}
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">{t("check-out-blogs")}</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">{t("blogs")}</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            href={`blogs/${post.slug}`}
            key={post._id}
            className="shadow-2xl p-1 border-2 border-gray-500 hover:scale-105 hover:border-blue-500 transition rounded-lg"
          >
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                width={450}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="space-y-3">
              <p className="mt-2 font-extrabold bg-gradient-to-r from-mwc-blue to-cyan-600 bg-clip-text text-transparent ">
                {post.title}
              </p>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
