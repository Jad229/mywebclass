"use client";
import uploadBlogPost from "@/pages/api/createBlogPost";
import fetchData from "@/pages/api/promptChatGPT.js";
import React, { useRef, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function GeneratePostPage({ params: { lng } }) {
  const { t } = useTranslation(lng, "generate");
  const [response, setResponse] = useState("");
  const blogTitle = useRef(null);
  const blogContent = useRef(null);
  const blogExcerpt = useRef(null);
  const promptInput = useRef("");

  function slugifyTitle(title) {
    return title.replace(/\s+/g, "-").toLowerCase();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetchData(promptInput.current.value);
    setResponse(response.choices[0].message.content);
  };

  const handleSanitySubmit = async (event) => {
    event.preventDefault();

    const slug = {
      _type: "slug",
      current: slugifyTitle(blogTitle.current.value),
    };

    const response = await uploadBlogPost(
      blogTitle.current.value,
      blogContent.current.value,
      blogExcerpt.current.value,
      slug
    );
    console.log(response);
  };
  return (
    <ProtectedRoute>
      <section
        id="generate-post-section"
        className="flex flex-col px-3 md:px-10 md:flex-row justify-center w-full py-10 mx-auto md:space-x-10 "
      >
        <form
          id="chatgpt-post-generator"
          className="bg-slate-900 shadow-2xl w-full md:w-1/2 rounded-2xl px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-neutral-200 text-sm font-bold mb-2"
              htmlFor="prompt"
            >
              {t("prompt")}
            </label>
            <div className="flex flex-row">
              <textarea
                rows="1"
                class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
                id="promptInput"
                ref={promptInput}
                type="text"
              />
              <button
                type="submit"
                class="inline-flex justify-center items-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
                <span class="sr-only">{t("send-message")}</span>
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-neutral-200 text-sm font-bold mb-2"
              htmlFor="response"
            >
              {t("response")}
            </label>
            <textarea
              className="block p-2.5 w-full text-sm  rounded-lg border ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              rows="12"
              id="responseOutput"
              type="text"
              placeholder="ChatGPT Response"
              value={response}
            />
          </div>
        </form>

        <form
          id="sanity-post-generator"
          className="bg-white shadow-2xl w-full md:w-1/2 rounded-2xl px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSanitySubmit}
        >
          <h1 className="mb-4 text-4xl text-slate-900 font-extrabold">
            {t("new-blog")}
          </h1>
          <div className="">
            <div className="border-b border-black">
              <label
                className="text-lg block text-black font-bold mb-2"
                htmlFor="title"
              >
                {t("title")}
              </label>
              <textarea
                className="bg-transparent rounded w-full py-2 px-3 text-neutral-700 mb-3 leading-tight"
                id="title"
                ref={blogTitle}
                rows="1"
                type="text"
              />
            </div>
          </div>
          <div className="">
            <div className="border-b border-black">
              <label
                className="text-lg block text-black font-bold mb-2"
                htmlFor="content"
              >
                {t("content")}
              </label>
              <textarea
                className="bg-transparent rounded w-full py-2 px-3 text-neutral-700 mb-3 leading-tight"
                id="content"
                ref={blogContent}
                rows="1"
                type="text"
              />
            </div>
          </div>
          <div className="">
            <div className="border-b border-black">
              <label
                className="text-lg block text-black font-bold mb-2"
                htmlFor="excerpt"
              >
                {t("excerpt")}
              </label>
              <textarea
                className="bg-transparent rounded w-full py-2 px-3 text-neutral-700 mb-3 leading-tight"
                id="excerpt"
                ref={blogExcerpt}
                rows="1"
                type="text"
              />
            </div>
          </div>
          <button
            className="mt-4 bg-slate-800 w-full md:w-1/4 hover:bg-slate-400 text-gray-200 hover:text-neutral-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {t("publish")}
          </button>
        </form>
      </section>
    </ProtectedRoute>
  );
}
