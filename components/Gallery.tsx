"use client";

import React from "react";
import Gallery from "react-photo-gallery";

interface Image {
  src: string;
  width: number;
  height: number;
}

interface ImageProps {
  images: Image[];
}

export function GalleryView({ images }: ImageProps) {
  return (
    <>
      <Gallery photos={images} />
    </>
  );
}
