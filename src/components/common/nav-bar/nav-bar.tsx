"use client";
import MainBar from "./main-bar";
import Time from "./time";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className=" fixed w-full lg:sticky lg:top-0  z-50  bottom-6 ">
      <nav className="wrapper  py-2">
        <ul className=" flex  lg:justify-between items-center">
          <li className=" hidden lg:block">
            <Link href="/">A.Deffaf</Link>
          </li>
          <li className="w-fit mx-auto ">
            <MainBar />
          </li>
          <li className=" hidden lg:block">
            <Time />
          </li>
        </ul>
      </nav>
    </header>
  );
}
