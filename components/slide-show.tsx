import React from "react";
import Image from "next/image";

interface Props {
  images: {
    src: string;
    width: number;
    height: number;
  }[];
  length: number;
}

// TODO: add this slider to event details when image resized

export function Slideshow({ images, length }: Props) {
  const [index, setIndex] = React.useState(0);
  const delay = 2500;
  // eslint-disable-next-line no-undef
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index, length]);

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden border">
      <div
        className="flex gap-6 whitespace-nowrap transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 50}%`,
          transform: `translate3d(${-index * 50}%, 0, 0)`,
        }}
      >
        {images.map((image, idx) => (
          <div className="inline-block" key={idx}>
            <Image
              src={image.src}
              alt="Images"
              width={800}
              height={900}
              className="w-1/2"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-0 flex w-full justify-center">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`mx-2 size-2 rounded-full bg-[#c4c4c4] ${
              index === idx ? "bg-[#6a0dad]" : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
