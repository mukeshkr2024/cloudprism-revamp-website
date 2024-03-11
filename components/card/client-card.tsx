import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  description: { content: string }[];
  profilePic: string;
};

export default function ClientCard({ description, name, profilePic }: Props) {
  return (
    <div
      className="flex h-[223px] w-[390px] flex-col gap-3 rounded-lg p-5"
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
      }}
    >
      <div className="flex items-center gap-4">
        <Image
          src={profilePic}
          alt={name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h4 className="text-lg font-medium text-white">{name}</h4>
          <p className="text-[#747373]"> @cloudprism</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {description &&
          description.map((item, index) => (
            <p key={index} className="text-sm text-[#ADADAD]">
              {item?.content}
            </p>
          ))}
      </div>
    </div>
  );
}
