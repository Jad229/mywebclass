import Card from "@/components/Card";
import mainImage from "@/public/images/hero_image.jpg";
import Image from "next/image";
import { BsDashLg } from "react-icons/bs";

export default function HeroCard({ lng, t }) {
  return (
    <div className="my-24 flex flex-row items-center justify-center h-5/6">
      <Card>
        <section
          className=" flex flex-col items-center justify-center w-1/2 space-y-3 p-2 md:p-10"
          id="hero-text"
        >
          <div className="space-y-2 md:space-y-4 xl:space-y-8">
            <h4 className="hidden">
              <p className="flex flex-row flex-wrap text-mwc-blue">
                <BsDashLg size={30} />{" "}
                <span className="hidden">{t("title")}</span>
              </p>
            </h4>
            <div>
              <h1 className="text-2xl xl:text-6xl md:text-4xl font-extrabold tracking-tight text-mwc-blue">
                {t("unleashing")}
              </h1>
              <h1 className="text-2xl xl:text-6xl md:text-4xl font-extrabold tracking-tight text-mwc-blue">
                {t("imagination")}
              </h1>
            </div>

            <p className="xl:text-xl md:text-lg text-xs">{t("content")}</p>
            <a
              href="/blogs"
              className="inline-flex items-center px-3 py-2 text-xs 2xl:text-lg md:text-sm font-medium text-center text-white bg-cyan-500 shadow-lg rounded-lg hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              aria-label="goes to the blog page"
            >
              {t("read-blogs")}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </section>

        <div className="w-1/2 block">
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
