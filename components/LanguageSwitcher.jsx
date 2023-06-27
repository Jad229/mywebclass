"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsGlobe2 } from "react-icons/bs";
import { languages } from "@/app/i18n/settings";

export default function LanguageSwitcher({ lng }) {
  const router = useRouter();
  function handleChange(event) {
    const newLanguage = event.target.value;
    if (newLanguage !== lng) {
      router.push(`/${newLanguage}`);
    }
  }
  return (
    <div className="relative ml-auto">
      <select
        name="language-switcher"
        id="language-switcher"
        className="pl-8 pr-1 py-2 rounded-md"
        value={lng}
        onChange={(event) => handleChange(event)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <span className="absolute top-3 left-2">
        <BsGlobe2 />
      </span>
    </div>
  );
}
