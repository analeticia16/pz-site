/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ArticlePic from "@/app/images/article-1.jpg";

export default function Home() {
  return (
    <>
      <nav className="border border-neutral-300">
        <div className="container flex max-w-screen-xl items-center justify-between p-4">
          <a className="font-serif text-4xl font-medium" href="#">
            Pereira Zerger
          </a>
          <ul className="flex items-center text-xl font-medium">
            <li className="m-4 rounded px-4 py-2 hover:bg-gray-300">
              Serviços
            </li>
            <li className="m-4 rounded px-4 py-2 hover:bg-gray-300">Artigos</li>
            <li className="m-4 rounded px-4 py-2 hover:bg-gray-300">Sobre</li>
            <li className="m-4 rounded px-4 py-2 hover:bg-gray-300">Contato</li>
          </ul>
        </div>
      </nav>
      <main className="container max-w-screen-xl py-4">
        {Servicos()}
        <hr />
        {Parceiros()}
        <hr />
        {Blog()}
      </main>
      <footer className="bg-gray-800">
        <div className="container max-w-screen-xl pt-16">
          <div className="flex">
            <div className="w-1/3">
              <h3 className="font-serif text-4xl font-medium text-gray-100">
                Logo
              </h3>
              <p className="mt-6 text-justify text-sm text-gray-300">
                Nós Atendemos toda Região Metropolitana de Campinas/SP e Regiões
                Próximas. O Nosso Horário de Atendimento é de Segunda a Sexta,
                das <span className="font-bold text-white">9h às 18h</span>.
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
                    <a className="text-gray-400 hover:text-white">Sobre mim</a>
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
                    <a className="text-gray-400 hover:text-white">Acidentes</a>
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
            <h5 className="text-justify text-sm text-gray-400">
              Copyrigth@ 2022 Direitos reservados a{" "}
              <span className="font-semibold text-white">
                Silvana Pereira Advocacia.{" "}
              </span>
              Desenvolvido por{" "}
              <span className="font-semibold text-white">
                @Alexandre Landgraf
              </span>
            </h5>
          </div>
        </div>
      </footer>
    </>
  );

  function Servicos() {
    return (
      <>
        <section id="servicos" className="py-16">
          <div className="mx-auto max-w-screen-lg">
            <div className="grid grid-cols-2 grid-rows-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <>
                  <div className="col-span-1 border px-6 pb-4 pt-6 md:flex">
                    <div className="flex justify-center pt-1 md:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded bg-gray-700"></div>
                    </div>
                    <div className="pl-6 md:flex-grow">
                      <h3 className="text-xl font-semibold text-black">
                        Nome do serviço
                      </h3>
                      <p className="mt-2 text-justify text-base leading-relaxed text-slate-600">
                        Em decisão unânime, STF entendeu que o uso da tese
                        contraria os princípios constitucionais. Em decisão
                        unânime, STF entendeu que o uso da tese contraria os
                        princípios constitucionais.
                      </p>
                      <div className="mt-4 flex justify-end">
                        <a
                          href="#"
                          className="flex items-center rounded px-4 py-2 uppercase text-gray-950 hover:bg-gray-300"
                        >
                          Leia mais
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="ml-2 h-6 w-6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  function Blog() {
    return (
      <section id="artigos" className="py-16">
        <div className="mt-16 grid grid-cols-3 gap-12">
          {[1, 2, 3].map((n) => (
            <>
              <div className="py-8">
                <Image
                  src={ArticlePic}
                  alt="article"
                  className="aspect-[3/2] w-full rounded object-cover"
                />
                <div className="mt-6">
                  <span className="mr-4 text-sm font-medium tracking-widest text-slate-500">
                    11 ago, 2023
                  </span>
                  <span className="inline-block rounded bg-gray-50 px-4 py-2 text-sm font-semibold text-stone-600">
                    Direitos Humanos
                  </span>
                </div>
                <h3 className="mt-4 text-justify text-xl font-medium">
                  STF invalida uso da legítima defesa da honra em feminicídios.
                </h3>
                <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                  Em decisão unânime, STF entendeu que o uso da tese contraria
                  os princípios constitucionais da dignidade humana, da proteção
                  à vida e da igualdade de gênero.
                </p>
                <div className="mt-8 flex justify-end">
                  <a
                    href="#"
                    className="flex items-center rounded px-4 py-2 uppercase text-gray-950 hover:bg-gray-300"
                  >
                    Leia mais
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-6 w-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    );
  }

  function Parceiros() {
    return (
      <section id="contato" className="py-16">
        <div className="mt-16 grid grid-cols-3 grid-rows-2 gap-12">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <>
              <div className="rounded bg-slate-50 py-12">
                <img
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  alt="parceira"
                  className="mx-auto h-64 w-64 rounded-full object-cover"
                />
                <h3 className="mt-6 text-center text-lg font-semibold text-black">
                  Nome Sobrenome
                </h3>
                <p className="text-center text-base leading-relaxed text-slate-600">
                  Função escritório
                </p>
                <ul className="mt-6 flex items-center justify-center">
                  <li className="px-2 text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </li>
                  <li className="px-2 text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </li>
                  <li className="px-2 text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </>
          ))}
        </div>
      </section>
    );
  }
}
