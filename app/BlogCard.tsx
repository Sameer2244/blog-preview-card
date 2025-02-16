import Image from "next/image";
import BlogContent from "./BlogContent";

export default function BlogCard() {
  return (
    <main className="bg-yellow w-[100vw] h-[100vh] flex justify-center items-center font-figtree">
      <div className="bg-white border border-gray950 rounded-[1.25rem] p-6 shadow-[8px_8px_0px_0px_#000000] md:w-[24rem] max-md:w-[20.4375rem]">
        <Image
          width={336}
          height={200}
          src="./illustration-article.svg"
          alt="blog-image"
          className="rounded-[.625rem] max-md:w-[17.4375rem] max-md:h-[12.5rem] object-cover"
        />
        <BlogContent />
      </div>
    </main>
  );
}
