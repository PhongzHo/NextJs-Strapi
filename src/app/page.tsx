import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="bg-red-500">
        ABCS
      </div>
      <Link href={'/blogs'}>Blogs</Link>
    </>
  );
}
