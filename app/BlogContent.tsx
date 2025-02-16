import Image from "next/image";
import React from "react";

export default function BlogContent() {
  return (
    <div className="pt-6">
      <div className="bg-yellow py-1 px-3 w-fit rounded-[.25rem]">
        <p className="font-[800] text-sm leading-[1.3125rem] tracking-normal text-gray950 max-md:leading-[1.125rem] max-md:text-xs">
          Learning
        </p>
      </div>
      <p className="pt-3 font-medium text-sm leading-[1.3125rem] tracking-normal text-gray950 max-md:leading-[1.125rem] max-md:text-xs">
        Published 21 Dec 2023
      </p>
      <div className="pt-3">
        <h1 className="text-gray950 font-[800] leading-9 tracking-normal text-[1.5rem] hover:text-yellow max-md:text-[1.25rem] max-md:leading-[1.875rem] cursor-pointer">
          HTML & CSS foundations
        </h1>
        <p className="pt-3 text-gray500 leading-[1.5rem] tracking-normal font-medium text-base max-md:text-sm max-md:leading-[1.3125rem]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="pt-6 flex gap-3 items-center">
        <Image src="/image-avatar.webp" width={32} height={32} alt="avatar" />
        <p className="text-sm leading-[1.3125rem] tracking-normal font-[800]">Greg Hooper</p>
      </div>
    </div>
  );
}
