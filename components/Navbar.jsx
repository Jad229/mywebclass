"use client";
import { useTranslation } from "@/app/i18n/client";
import { SearchHeader } from "@/components/Search/SearchHeader";
import { useNextRouting } from "@/utils/useNextRouting";
import { signOut, useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { GenerateConfig } from "./Search/config";

export const Navbar = ({ lng }) => {
  const { t } = useTranslation(lng, "navbar");
  const { data } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const config = GenerateConfig();
  //const combinedConfig = useNextRouting(config, "<baseUrl>");

  return (
    <section id="header">
      <nav className="flex flex-row py-5 px-16 bg-mwc-blue bg-opacity-75 text-white backdrop-filter w-full backdrop-blur-lg fixed top-0 z-10">
        <div className="flex flex-row me-auto space-x-2">
          <HiOutlineAcademicCap size={30} />
          <Link href="/" className="adjust-nav-items">
            <p className="text-lg md:text-xl font-bold">{t("title")}</p>
          </Link>
        </div>
        <div className="flex flex-row ms-auto justify-center items-center space-x-2">
          <button type="button" aria-label="user menu button">
            <FaUser size={25} />
          </button>
          <button
            type="button"
            aria-label="hamburger menu button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </nav>
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }  w-full sm:w-1/2 md:w-1/2 lg:w-1/3 fixed top-0 bottom-0 right-0 z-[1000] transition-transform duration-300`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="bg-mwc-blue bg-opacity-50 text-white backdrop-filter backdrop-blur-3xl h-full w-full p-4 pt-24">
          <IoMdClose className="absolute top-9 right-9" size={40} />
          <ul className="mt-10 text-xl space-y-5 font-bold">
            <li>
              <SearchHeader
                className="bg-white text-center"
                config={config}
                lng={lng}
              />
            </li>
            <li>
              <Link href="/">
                <p className="block pl-8 py-2">{t("home")}</p>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <p className="block pl-8 py-2">{t("blogs")}</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="block pl-8 py-2">{t("profile")}</p>
              </Link>
            </li>
            <li>
              <Link href="/blogs/generate">
                <p className="block pl-8 py-2">{t("generate")}</p>
              </Link>
            </li>
            {data?.user ? (
              <li className="mb-5">
                <p
                  className="block pl-8 py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => signOut()}
                >
                  {t("log-out")}
                </p>
              </li>
            ) : (
              <li className="mb-5">
                <Link href="">
                  <button onClick={() => signIn("google")}>
                    <p className="block pl-8 py-2">{t("login")}</p>
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
