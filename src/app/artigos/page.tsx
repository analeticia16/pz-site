/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Tag } from "../components";

export default function Artigos() {
  return (
    <>
      <div className="mx-auto max-w-screen-md py-12 text-center">
        <Tag>Artigos</Tag>
        <h2 className="mt-4 text-4xl text-gray-900">Informativos</h2>
        <p className="mt-8 text-base italic leading-relaxed text-gray-500">
          Fique sempre bem informado com nosso acervo de matérias
        </p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 rounded-sm border border-slate-200 p-6">
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
          <hr />
        </div>
      </div>
    </>
  );
}
