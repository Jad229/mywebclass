"use client";

import axios from "@/node_modules/axios/index";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTranslation } from "@/app/i18n/client";

export default function Register({ params: { lng } }) {
  const { t } = useTranslation(lng, "Navbar");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("api/register", {
        name,
        email,
        password,
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mt-5 flex justify-center">
        <div className="w-full lg:w-1/2">
          <form
            className="bg-white border border-gray-200 rounded-lg shadow-md p-8"
            onSubmit={submitHandler}
          >
            <h1 className="mb-6 text-3xl font-bold text-center">
              {t("register")}
            </h1>
            <div className="mb-6">
              <label
                className="block mb-2 text-lg font-bold text-gray-700"
                htmlFor="name_field"
              >
                {t("name")}
              </label>
              <input
                type="text"
                id="name_field"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline-gray"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-lg font-bold text-gray-700"
                htmlFor="email_field"
              >
                {t("email-address")}
              </label>
              <input
                type="email"
                id="email_field"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline-gray"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-lg font-bold text-gray-700"
                htmlFor="password_field"
              >
                {t("password")}
              </label>
              <input
                type="password"
                id="password_field"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline-gray"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue"
            >
              {t("register")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
