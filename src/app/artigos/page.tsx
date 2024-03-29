/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ContactForm, Tag } from "../components";

export default function Artigos() {
  return (
    <>
      <div className="mb-12 mt-12 grid grid-cols-5 gap-8">
        <div className="col-span-3 rounded-sm">
          <img
            src="https://silvanapereiraadvocacia.com.br/wp-content/uploads/2023/09/pexels-sora-shimazaki-5935794-1024x683-1024x585.jpg"
            alt="article"
            className="aspect-[3/2] w-full rounded-md object-cover"
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="mb-4 inline-block rounded bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-900">
              Direito consumidor
            </span>
          </div>
          <h2 className="text-justify text-2xl font-medium">
            Vítima de golpe do boleto falso não será indenizada
          </h2>
          <p className="mt-4 pr-3 text-justify">
            Em decisão unânime, o STJ decidiu que o Banco não terá de indenizar
            consumidor que pagou boleto fraudado.
          </p>
          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="autora"
                className="mr-3 h-12 w-12 rounded-full object-cover"
              ></img>
              <div>
                <p className="font-semibold">Dra. Suyanne Zerger</p>
                <p className="font-thin text-slate-800">17 set 2023</p>
              </div>
            </div>
            <div>
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
        <div className="col-span-2 flex flex-col justify-between gap-4">
          <div className="flex gap-4">
            <img
              src="https://silvanapereiraadvocacia.com.br/wp-content/uploads/2023/09/pexels-foteros-1025456-1-1024x683-1024x585.jpg"
              alt="article"
              className="aspect-[3/2] h-32 rounded-md object-cover"
            />
            <div>
              <span className="mb-4 inline-block rounded bg-slate-50 px-2 py-1 text-sm font-semibold text-slate-900">
                Direito Civil
              </span>
              <p className="text-justify">
                Condomínio é condenado por cortar água de moradora inadimplente
              </p>
            </div>
          </div>
          <hr />
          <div className="flex gap-4">
            <img
              src="https://silvanapereiraadvocacia.com.br/wp-content/uploads/2023/10/pexels-anna-shvets-4483327-1024x683-1024x585.jpg"
              alt="article"
              className="aspect-[3/2] h-32 rounded-md object-cover"
            />
            <div>
              <span className="mb-4 inline-block rounded bg-slate-50 px-2 py-1 text-sm font-semibold text-slate-900">
                Direito do Consumidor
              </span>
              <p className="text-justify">
                Plano de saúde é obrigado a custear cirurgia plástica após
                bariátrica
              </p>
            </div>
          </div>
          <hr />
          <div className="flex gap-4">
            <img
              src="https://silvanapereiraadvocacia.com.br/wp-content/uploads/2023/09/pexels-rdne-stock-project-6003572-1024x683-1024x585.jpg"
              alt="article"
              className="aspect-[3/2] h-32 rounded-md object-cover"
            />
            <div>
              <span className="mb-4 inline-block rounded bg-slate-50 px-2 py-1 text-sm font-semibold text-slate-900">
                Direitos Humanos
              </span>
              <p className="text-justify">
                Nova lei prevê auxílio-aluguel a vítimas de violência doméstica
              </p>
            </div>
          </div>
          <hr />
          <div className="flex gap-4">
            <img
              src="https://silvanapereiraadvocacia.com.br/wp-content/uploads/2023/08/pexels-karolina-grabowska-4379912-1024x683-1024x585.jpg"
              alt="article"
              className="aspect-[3/2] h-32 rounded-md object-cover"
            />
            <div>
              <span className="mb-4 inline-block rounded bg-slate-50 px-2 py-1 text-sm font-semibold text-slate-900">
                Direitos Humanos
              </span>
              <p className="text-justify">
                STF invalida uso da legítima defesa da honra em feminicídios
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-12 grid grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <>
            <div>
              <img
                src="/images/article-1.jpg"
                alt="article"
                className="aspect-[3/2] w-full rounded object-cover"
              />
              <div className="mt-6 flex items-center justify-between">
                <span className="mr-4 text-sm font-normal text-slate-600">
                  11 ago, 2023
                </span>
                <span className="mb-4 inline-block rounded bg-gray-50 px-4 py-2 text-sm font-semibold text-stone-600">
                  Diretos Humanos
                </span>
              </div>
              <h3 className="mt-4 text-justify text-xl font-medium">
                STF invalida uso da legítima defesa da honra em feminicídios.
              </h3>
              <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                Em decisão unânime, STF entendeu que o uso da tese contraria os
                princípios constitucionais da dignidade humana, da proteção à
                vida e da igualdade de gênero.
              </p>
              <div className="mt-8 flex justify-end">
                <a
                  href="artigo"
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
          </>
        ))}
      </div>
      {Contato()}
    </>
  );

  function Contato() {
    return (
      <section id="contato" className="mt-24">
        <div className="grid grid-cols-2 rounded bg-secondary-700 px-12">
          <div className="col-span-1 py-16">
            <Tag>Contato</Tag>
            <h3 className="mt-4 text-6xl text-gray-100">
              É fácil nos encontrar.
            </h3>
            <p className="mt-8 text-lg font-light text-gray-300">
              Faça seu cadastro no formulário e mande um resumo do seu caso, que
              minha equipe entrará em contato.
            </p>
            <ul className="mt-16 space-y-6">
              <li className="flex items-center justify-start text-gray-300">
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
                <span className="ml-4 text-sm font-semibold text-gray-200">
                  Rua Francisco Glicério, nº 1058, 5º andar, sala 508 - Centro,
                  Campinas/SP
                </span>
              </li>
              <li className="flex items-center justify-start text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="ml-4 text-sm font-semibold text-gray-200">
                  (19) 99671-8987
                </span>
              </li>
              <li className="flex items-center justify-start text-gray-300">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                </svg>
                <span className="ml-4 text-sm font-semibold text-gray-200">
                  silvanapereira@adv.oabsp.org.br
                </span>
              </li>
              <li className="flex items-center justify-start text-gray-300">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="currentColor"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                </svg>
                <span className="ml-4 text-sm font-semibold text-gray-200">
                  Segunda à sexta 9h -22h
                </span>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    );
  }
}
