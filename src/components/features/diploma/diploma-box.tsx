import Image from "next/image";
import Link from "next/link";

type DiplomaBoxProps = {
  id: string;
  image: string;
  title: string;
};

export default function DiplomaBox({ id, image, title }: DiplomaBoxProps) {
  return (
    <Link
      href={`/dashboard/${id}`}
      className="diploma-box relative p-2.5 min-h-[28rem] group overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover z-10 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-90 duration-300"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="diploma-title absolute bg-main/50 text-white text-lg md:text-xl font-semibold backdrop-blur z-20 p-4 w-[94%] bottom-3">
        {title}
      </div>
    </Link>
  );
}
