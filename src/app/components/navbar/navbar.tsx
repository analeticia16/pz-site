/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../button/button";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav>
        <div className="container flex max-w-screen-lg items-center justify-between py-4">
          <Link href="/">
            <img
              src="/images/sp-sem-bg.png"
              alt="logo silvava"
              className="h-auto w-20"
            ></img>
          </Link>
          <ul className="flex items-center justify-end space-x-8 text-lg">
            <li
              className={`px-4 py-2 ${
                pathname === "/" ? "font-bold text-gray-900" : "text-gray-600"
              }  hover:text-accent-500`}
            >
              <Link href="/">Início</Link>
            </li>
            <li
              className={`px-4 py-2 ${
                pathname === "/servicos"
                  ? "font-bold text-gray-900"
                  : "text-gray-600"
              }  hover:text-accent-500`}
            >
              <Link href="/servicos">Serviços</Link>
            </li>
            <li
              className={`px-4 py-2 ${
                pathname === "/artigos"
                  ? "font-bold text-gray-900"
                  : "text-gray-600"
              }  hover:text-accent-500`}
            >
              <Link href="artigos">Artigos</Link>
            </li>
            <li
              className={`px-4 py-2 ${
                pathname === "/sobre"
                  ? "font-bold text-gray-900"
                  : "text-gray-600"
              }  hover:text-accent-500`}
            >
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className="py-2">
              <a href="#">
                <Button>Contato</Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
