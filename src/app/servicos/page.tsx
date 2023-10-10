/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Servicos() {
  return (
    <>
      <div className="mb-2 mt-6 flex aspect-[16/9] w-full flex-col items-center justify-center rounded-lg bg-gray-900/70 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat p-8 bg-blend-overlay hover:bg-blend-multiply">
        <h1 className="mb-4 text-center text-6xl text-gray-200">
          Conheça nossos serviços jurídicos
        </h1>
        <p className="mb-20 mt-8 text-2xl text-gray-200">
          E veja como podemos te ajudar.
        </p>
        <a className="rounded bg-gradient-to-r from-primary-900 to-primary-950 px-8 py-4 text-center text-xl font-medium text-gray-100 hover:bg-gradient-to-r hover:from-primary-700 hover:to-primary-900">
          Contato
        </a>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="col-span-1 aspect-[3/2] h-auto w-full rounded-md bg-accent-950/90 bg-[url('https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover object-cover p-8 text-gray-200 bg-blend-multiply hover:bg-blend-overlay ">
          <p className="mb-8">Direito Trabalho</p>
          <h2 className="mb-20 text-5xl">Correção do seu FGTS</h2>
          <a
            href="#"
            className="inline-flex items-center rounded bg-accent/30 px-6 py-2 text-center text-lg text-gray-100"
          >
            Veja como
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
        <div className="col-span-1 aspect-[3/2] h-auto w-full rounded-md bg-accent-950/90 bg-[url('https://images.pexels.com/photos/4484154/pexels-photo-4484154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover object-cover p-8 text-gray-200 bg-blend-multiply hover:bg-blend-overlay ">
          <p className="mb-8">Direito Trabalho</p>
          <h2 className="mb-20 text-5xl">
            Acidente de <br />
            trabalho
          </h2>
          <a
            href="#"
            className="inline-flex items-center rounded bg-accent/30 px-6 py-2 text-center text-lg text-gray-100"
          >
            Veja como
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
        <div className="col-span-1 aspect-[3/2] h-auto w-full rounded-md bg-accent-950/90 bg-[url('https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover object-cover p-8 text-gray-200 bg-blend-multiply hover:bg-blend-overlay ">
          <p className="mb-8">Direito Trabalho</p>
          <h2 className="mb-20 text-5xl">Rescição trabalhista indireta</h2>
          <a
            href="#"
            className="inline-flex items-center rounded bg-accent/30 px-6 py-2 text-center text-lg text-gray-100"
          >
            Veja como
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
        <div className="col-span-1 aspect-[3/2] h-auto w-full rounded-md bg-accent-950/90 bg-[url('https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover object-cover p-8 text-gray-200 bg-blend-multiply hover:bg-blend-overlay ">
          <p className="mb-8">Direito Trabalho</p>
          <h2 className="mb-20 text-5xl">Assédio ou dano moral</h2>
          <a
            href="#"
            className="inline-flex items-center rounded bg-accent/30 px-6 py-2 text-center text-lg text-gray-100"
          >
            Veja como
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
        <div className="col-span-1 aspect-[3/2] h-auto w-full rounded-md bg-secondary-950/90 bg-[url('https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover object-cover p-8 text-gray-200 bg-blend-multiply hover:bg-blend-overlay ">
          <p className="mb-8">Direito cível</p>
          <h2 className="mb-20 text-5xl">Revisional de veículos</h2>
          <a
            href="#"
            className="inline-flex items-center rounded bg-accent/30 px-6 py-2 text-center text-lg text-gray-100"
          >
            Veja como
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
  );
}
