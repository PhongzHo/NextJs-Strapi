import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex mt-12 justify-center gap-4">
        <Link href={'/blogs'} className="p-4 border-[2px] border-orange-400">Blogs</Link>
        <Link href={'/three'} className="p-4 border-[2px] border-orange-400">Blogs section</Link>
      </div>

    </>
  );
}
