import React from "react";
import ClientCard from "../card/client-card";
import { clientSays } from "@/constants";

export default function OurClientSay() {
  return (
    <div
      className="w-full  bg-center"
      style={{
        backgroundImage: "url('/assets/gradients/client-say-gradient.svg')",
      }}
    >
      <div className="flex flex-col gap-y-16 py-12">
        <h1 className="h2_semibold mt-32 text-center">
          Hear What Our Clients Say
        </h1>
        <div className="mx-auto mt-8 flex max-w-4xl gap-x-6">
          {clientSays &&
            clientSays.map(({ name, description, profilePic }) => (
              <ClientCard
                key={name}
                description={description}
                name={name}
                profilePic={profilePic}
              />
            ))}
        </div>

        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(127, 127, 127, 0) 0%, rgba(25, 25, 25, 0.47) 50.5%, rgba(127, 127, 127, 0) 100%);",
          }}
          className="mb-10 h-1.5"
        ></div>
      </div>
    </div>
  );
}
