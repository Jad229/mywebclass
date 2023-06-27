import React from "react";
import { useTranslation } from "@/app/i18n";
import Card from "@/components/Card";
import mainImage from "@/public/images/hero_image.jpg";
import Image from "next/image";

export const metadata = {
  title: "About",
  description: "About Page",
};

export default async function AboutPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "about");
  return (
    <div className="mt-0 mb-12 flex flex-col items-center justify-center">
            <div className="mt-10 mb-6  w-5/6 lg:w-4/6 bg-white text-center rounded-2xl py-10 shadow-2xl">
        <span class="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-mwc-blue to-cyan-600">
        {t("title")}
        </span>

      </div>
      
      <Card>
        <section
          className=" flex flex-col md:items-center  md:w-1/2  space-y-3 lg:p-10 p-5"
          id="hero-text"
        >
          <div className="space-y-2 text-slate-800 leading-relaxed">
            <p class="text-xl  font-bold">{t("content2")}</p>
            <p className="text-xl lg:text-xl">{t("content")}</p>
            <p className="text-xl lg:text-xl">{t("content1")}</p>
          </div>
        </section>

        <div className=" md:w-1/2 md:block">
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
      <div className="mt-6 mb-6 text-4xl w-5/6 lg:w-4/6 bg-white text-center rounded-2xl py-20 text-cyan-900 shadow-2xl ">
        <h1 className="px-4">
        {t("content3")}</h1>
      </div>

      <Card>
        <section
          className=" flex flex-col md:items-center space-y-3 lg:p-10 p-5 text-slate-800"
          id="hero-text"
          >
          <div className="space-y-6 py-6 text-xl lg:text-xl leading-relaxed">
            <p className="">{t("content5")}</p>
            <p className="">{t("content6")}</p>
            <p className="">{t("content7")}</p>
            <p className="">{t("content8")}</p>
          </div>

        </section>
      </Card>
    </div>
  );
}
