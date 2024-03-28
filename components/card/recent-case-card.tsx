import { ImageProps } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  slug: string;
  image: string;
}

export default function RecentCaseStudy({ image, slug, title }: Props) {
  return (
    <Link href={slug}>
      <div
        style={{
          backgroundImage: `url('${image}')`,
        }}
        className="relative h-44 w-[320px] rounded-[9px] bg-cover bg-no-repeat lg:h-40 lg:w-64"
      >
        <p className="absolute bottom-8 left-4 line-clamp-2 text-base font-normal">
          {title}
        </p>
      </div>
    </Link>
  );
}
