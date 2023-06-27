import React from "react";
import { useTranslation } from "@/app/i18n";
import Card from "@/components/Card";
import mainImage from "@/public/images/hero_image.jpg";
import Image from "next/image";

export const metadata = {
  title: "Story",
  description: "Story Page",
};

export default async function StoryPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "story");
  return (
    <div className="my-24 flex flex-col items-center justify-center">
      <div className="mt-0 mb-6 text-6xl w-5/6 lg:w-4/6 bg-white text-center rounded-2xl py-10 shadow-2xl">
        <span class="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-mwc-blue to-cyan-600">
        {t("title")}
        </span>
      </div>

      <Card>
        <section
          className=" flex flex-col md:items-center  md:w-1/2  space-y-3 lg:p-10 p-5"
          id="hero-text"
        >

          <div className="space-y-2 text-slate-800">
            <p className="text-sm lg:text-xl">{t("content")}</p>
            <p className="text-sm lg:text-xl">{t("content2")}</p>
            <p className="text-sm lg:text-xl">{t("content3")}</p>
            <p className="text-sm lg:text-xl">{t("content4")}</p>
          </div>
        </section>

        <div className=" md:w-1/2  md:block">
          <Image
            src={mainImage}
            alt="mywebclass main image. A futuristic computer with a sleek design floating in mid-air, symbolizing its journey through innovation"
            style={{
              clipPath:
                "polygon(100% 0, 100% 50%, 100% 100%, 48% 100%, 28% 56%, 5% 0)",
            }}
            className="bg-cover rounded-lg object-cover h-full"
          />
        </div>
      </Card>
    </div>
  );
}
