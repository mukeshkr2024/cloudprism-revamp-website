import React from "react";
import ClientCard from "../card/client-card";
import { clientSays } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function OurClientSay() {
  return (
    <div
      className="mx-auto flex h-[520px] w-full max-w-[95rem] flex-col  justify-center bg-cover bg-center text-white sm:h-[600px] md:h-[700px]  lg:h-[800px] xl:h-[950px]"
      style={{
        backgroundImage: "url('/assets/gradients/client-say-gradient.svg')",
      }}
    >
      <div className="mx-auto flex max-w-[310px] flex-col gap-y-10   sm:max-w-md  sm:gap-y-12 md:max-w-2xl  md:gap-y-14 lg:max-w-[850px] lg:gap-y-20 xl:gap-y-24">
        <h1 className="h2_semibold text-center xl:!text-6xl ">
          Hear What Our Clients Say
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {clientSays.map(({ name, description, profilePic }, index) => (
              <CarouselItem key={name} className="md:basis-1/2 ">
                <ClientCard
                  description={description}
                  name={name}
                  profilePic={profilePic}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious variant={"default"} />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
