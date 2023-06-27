import React from "react";
import { useTranslation } from "@/app/i18n";

import HeroCard from "@/components/HeroCard";
export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default async function HomePage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "home");
  return (
    <>
      <HeroCard lng={lng} t={t} />
    </>
  );
}
