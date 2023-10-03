/* eslint-disable @next/next/no-img-element */
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Button } from "./components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pereira Zerger Advocacia",
  description: "Site de advocacia especializada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col justify-between">
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
              <li className="px-4 py-2 font-bold text-gray-900">
                <Link href="/">Início</Link>
              </li>
              <li className="px-4 py-2 text-gray-600 hover:text-accent-500">
                Serviços
              </li>
              <li className="px-4 py-2 text-gray-600 hover:text-accent-500">
                <Link href="artigos">Artigos</Link>
              </li>
              <li className="px-4 py-2 text-gray-600 hover:text-accent-500">
                <Link href="sobre">Sobre</Link>
              </li>
              <li className="py-2">
                <a href="#">
                  <Button>Contato</Button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container max-w-screen-lg grow">{children}</main>
        <footer className="mt-16">
          <div className="container rounded bg-gray-900 px-16 pt-24">
            <div className="flex">
              <div className="w-1/3">
                <Link href="/">
                  <img
                    src="/images/sp-sem-bg.png"
                    alt="logo silvava"
                    className="h-auto w-16"
                  ></img>
                </Link>
                <p className="mt-6 text-justify text-sm text-gray-300">
                  Nós Atendemos toda Região Metropolitana de Campinas/SP e
                  Regiões Próximas. O Nosso Horário de Atendimento é de Segunda
                  a Sexta, das{" "}
                  <span className="font-bold text-white">9h às 18h</span>.
                </p>
                <ul className="mt-6 flex gap-6 text-sm text-gray-400">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="flex flex-grow flex-wrap pl-20 text-center">
                <div className="flex w-1/4 flex-col px-4">
                  <h2 className="title-font text-sm font-semibold text-white">
                    TELEFONE
                  </h2>
                  <ul className="mt-4 flex flex-grow flex-col gap-4">
                    <li>
                      <a className="text-gray-400 hover:text-white">
                        19 9.9671-8987
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-1/4 flex-col px-4">
                  <h2 className="title-font text-sm font-semibold text-white">
                    ESCRITÓRIO
                  </h2>
                  <ul className="mt-4 flex flex-grow flex-col gap-4">
                    <li>
                      <Link
                        href="sobre"
                        className="text-gray-400 hover:text-white"
                      >
                        Sobre mim
                      </Link>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white">Blog</a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white">Contato</a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-1/4 flex-col px-4">
                  <h2 className="title-font text-sm font-semibold text-white">
                    TRABALHO
                  </h2>
                  <ul className="mt-4 flex flex-grow flex-col gap-4">
                    <li>
                      <a className="text-gray-400 hover:text-white">
                        Correções FGTS
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white">
                        Acidentes
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white">
                        Rescisão Indireta
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white">
                        Assédio Moral
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-1/4 flex-col px-4">
                  <h2 className="title-font text-sm font-semibold text-white">
                    CÍVEL
                  </h2>
                  <ul className="mt-4 flex flex-grow flex-col gap-4">
                    <li>
                      <a className="text-gray-400 hover:text-white">Veículos</a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white">Seguros</a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white">
                        Inventários
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white">Divórcio</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-16 flex h-16 items-center justify-start border-t border-gray-50 border-opacity-20 py-12">
              <h3 className="text-justify text-sm text-gray-400">
                Copyrigth@ 2022 Direitos reservados a{" "}
                <span className="font-semibold text-white">
                  Silvana Pereira Advocacia.{" "}
                </span>
                Desenvolvido por{" "}
                <span className="font-semibold text-white">
                  @Alexandre Landgraf
                </span>
              </h3>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
