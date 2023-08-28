/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ArticlePic from "@/assets/images/article-1.jpg";
import { Button, Tag } from "@/app/components";

export default function Home() {
  return (
    <>
      <nav>
        <div className="container flex max-w-screen-lg items-center justify-between py-6">
          <a className="font-serif text-3xl font-medium" href="#">
            Pereira Zerger
          </a>
          <ul className="flex items-center justify-end space-x-8 text-lg">
            <li className="rounded px-4 py-2 text-gray-700 hover:bg-gray-300">
              Serviços
            </li>
            <li className="rounded px-4 py-2 text-gray-700 hover:bg-gray-300">
              Artigos
            </li>
            <li className="rounded px-4 py-2 text-gray-700 hover:bg-gray-300">
              Sobre
            </li>
            <li className="py-2">
              <a href="#">
                <Button>Contato</Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container max-w-screen-lg">
        <section className="container mb-16 flex min-h-[75vh] max-w-screen-xl grow flex-col items-center justify-center">
          <div className="mx-auto grid grid-cols-12 gap-16">
            <div className="col-span-7">
              <h1 className="mb-8 text-6xl font-medium leading-none tracking-tight text-gray-900">
                Está procurando uma advogada?
              </h1>
              <p className="mb-16 pr-16 text-xl font-light text-gray-500">
                Muito prazer! Sou a Dra. Silvana e posso ajudar a resolver o seu
                problema. Vamos conversar?
              </p>
              <div className="flex items-center text-lg">
                <a href="#" className="">
                  <Button>Conheça os serviços</Button>
                </a>
                <a
                  href="#"
                  className="flex items-center rounded px-4 py-2 font-semibold tracking-tight text-gray-900 hover:bg-gray-300"
                >
                  Sobre mim
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-span-5 flex h-80 w-full items-center rounded bg-neutral-400"></div>
          </div>
          <div className="mt-16 flex w-full items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6s-6-2.691-6-6v-8c0-3.309 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8v8c0 4.418 3.582 8 8 8s8-3.582 8-8v-8c0-4.418-3.582-8-8-8zm0 9c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5 1.5.672 1.5 1.5-.671 1.5-1.5 1.5z" />
            </svg>
            <span className="mx-2 text-gray-500">
              Navegue para conhecer mais.
            </span>
            <i className="bx bx-down-arrow-alt"></i>
          </div>
        </section>
        {Servicos()}
        <br />
        {Parceiros()}
        <br />
        {Contato()}
        <br />
        {Blog()}
      </main>
      {Footer()}
    </>
  );

  function Servicos() {
    return (
      <>
        <section id="servicos">
          <div className="mx-auto max-w-screen-md py-8 text-center">
            <Tag>Áreas de atuação</Tag>
            <h2 className="mt-4 text-6xl">
              Conheça nossos principais serviços jurídicos.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et
              mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor
              at nulla.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-screen-lg">
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

  function Parceiros() {
    return (
      <section id="contato">
        <div className="mx-auto max-w-screen-md py-8 text-center">
          <Tag>Parceiros</Tag>
          <h2 className="mt-4 text-6xl">
            Seja atentido por equipe altamente capacitada.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis
            gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.
          </p>
        </div>
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

  function Contato() {
    return (
      <section id="contato">
        <div className="grid grid-cols-2">
          <div className="col-span-1 py-24">
            <Tag>Contato</Tag>
            <h3 className="mt-4 text-6xl">É fácil nos encontrar.</h3>
            <p className="mt-8 text-lg font-light text-gray-600">
              Faça seu cadastro no formulário e mande um resumo do seu caso, que
              minha equipe entrará em contato.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex items-center justify-start text-gray-800">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                </svg>
                <span className="ml-4 text-sm font-light text-gray-500">
                  Rua Francisco Glicério, nº 1058, 5º andar, sala 508 - Centro,
                  Campinas/SP
                </span>
              </li>
              <li className="flex items-center justify-start text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="ml-4 text-sm font-light text-gray-500">
                  (19) 99671-8987
                </span>
              </li>
              <li className="flex items-center justify-start text-gray-800">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                </svg>
                <span className="ml-4 text-sm font-light text-gray-500">
                  silvanapereira@adv.oabsp.org.br
                </span>
              </li>
              <li className="flex items-center justify-start text-gray-800">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                </svg>
                <span className="ml-4 text-sm font-light text-gray-500">
                  Segunda à sexta 9h -22h
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-1 py-32 pl-16">
            <form>
              <div className="mb-6 flex items-center gap-4">
                <div className="w-1/2">
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Nome: *
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Sobrenome: *
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="Digite seu sobrenome"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 flex items-center">
                <div className="w-full">
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Telefone: *
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="Digite seu telefone"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 flex items-center">
                <div className="w-full">
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Mensagem: *
                  </label>
                  <textarea
                    rows={6}
                    className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="Digite sua mensagem"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="w-auto rounded bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  function Blog() {
    return (
      <section id="artigos">
        <div className="mx-auto max-w-screen-xl py-8">
          <p className="mb-4 inline-block rounded bg-gray-50 px-4 py-2 text-sm font-semibold text-stone-600">
            Informação
          </p>
          <h2 className="text-6xl">Leia nossas últimas publicações.</h2>
          <p className="mt-8 text-base leading-relaxed text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis
            gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          {[1, 2, 3].map((n) => (
            <>
              <div className="py-8">
                <Image
                  src={ArticlePic}
                  alt="article"
                  className="aspect-[3/2] w-full rounded object-cover"
                />
                <div className="mt-6 flex items-center justify-between">
                  <span className="mr-4 text-sm font-normal text-slate-600">
                    11 ago, 2023
                  </span>
                  <Tag>Direitos Humanos</Tag>
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

  function Footer() {
    return (
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
    );
  }
}
