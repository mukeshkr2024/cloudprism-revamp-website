import Spotlight from "@/components/news/spotlight";
import { SubscribeForm } from "@/components/news/subscribe-form";
import Image from "next/image";

export default function NewsLetterPage() {
  return (
    <div className="overflow-hidden bg-[#090909]">
      <div className="mx-auto w-full max-w-[95rem]">
        <section
          className="flex h-[65vh] items-center justify-center bg-cover bg-center py-12 md:h-screen md:items-end"
          style={{
            backgroundImage: "url('./assets/images/newsletter-bg.png')",
          }}
        >
          <div className="flex h-[43%] max-w-5xl flex-col justify-between px-4 text-white md:h-[70%]">
            <h2 className="text-5xl font-bold text-[#DDDDDD] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[177px]">
              News Room
            </h2>
            <div className="flex items-end md:gap-5">
              <h1 className="text-lg font-light md:text-xl">
                Explore insightful articles, captivating stories, and expert
                tips on our blog page, your go-to destination for inspiration
                and knowledge.
              </h1>
              <Image
                src="/assets/icons/arrow-down.png"
                alt="IT Consultancy & Solutions"
                height={50}
                width={50}
                className="size-14 sm:size-16 lg:size-20"
              />
            </div>
          </div>
        </section>
        <Spotlight />
      </div>
      <SubscribeForm />
    </div>
  );
}
