import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { ShareButtons } from "./ShareButtons";

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
export default async function Footer({ lng }) {
  const { t } = await useTranslation(lng, "footer");
  return (
    <footer className="bg-opacity-75 text-neutral-200  py-8 px-16 space-y-20 xl:space-y-0  bg-mwc-blue flex flex-col">
      <section className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col space-y-4 font-bold">
          <Link href="/about">{t("about")}</Link>
          <Link href="/story">{t("story")}</Link>
          <Link href="/privacy">{t("privacy")}</Link>
        </div>
        <div>
          <p className="font-bold">{t("share")}</p>
          <div className="w-1/2">
            <ShareButtons />
          </div>
        </div>
        <form
          action={MAILCHIMP_URL}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate
          className="space-y-4"
        >
          <p className="font-bold">{t("subscribe-newsletter")}</p>
          <p>{t("monthly-digest")}</p>
          <div className="space-y-4 md:space-x-2">
            <label htmlFor="subscribe">{t("subscribe")} </label>
            <input
              type="text"
              id="subscribe"
              name="subscribe"
              className=" shadow-md rounded-full py-1 px-3"
            />
            <button className="py-1 px-2 bg-cyan-300 text-black rounded-md">
              {t("join-us")}
            </button>
          </div>
        </form>
      </section>

      <section className="text-mwc-blue">
        <LanguageSwitcher lng={lng} />
      </section>
    </footer>
  );
}
