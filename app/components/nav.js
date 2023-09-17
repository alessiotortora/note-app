import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center border border-black mt-5 bg-slate-400">
      <div className="flex justify-between p-10 w-[700px]">
        <Link href={"/"} className="bg-red-400 p-4">
          Logo
        </Link>
        <Link href={"/addTopic"} className="bg-white p-2">
          add topic
        </Link>
      </div>
    </nav>
  );
}
