"use client";

import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function Login({ params: { lng } }) {
  const { t } = useTranslation(lng, "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
      if (data?.error) {
        setError("Email or password is incorrect.");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <button
          className=" space-y-4 flex items-center justify-center max-w-sm w-full px-4 py-2 font-medium text-black transition-colors duration-300 bg-white-500 rounded-lg shadow-lg border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 focus:outline-none"
          onClick={() => signIn("google")}
        >
          <div className="mr-2">
            <FcGoogle />
          </div>
          {t("sign-in")}&nbsp;{" "}
        </button>
      </div>
    </>
  );
}
