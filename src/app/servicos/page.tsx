import React from "react";

export default function Servicos() {
  return (
    <>
      <div className="bg-[aspect-ratio:3/2] mb-2 mt-6 h-96 w-full rounded-lg bg-gray-800/70 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat p-8 bg-blend-multiply">
        <h1 className="mb-4 pr-64 text-6xl text-gray-200">
          Conheça nossos principais serviços jurídicos
        </h1>
        <p className="mb-20 mt-8 text-2xl text-gray-200">
          E veja como podemos te ajudar.
        </p>
        <a className="rounded bg-gradient-to-r from-primary-900 to-primary-950 px-8 py-4 text-center font-medium text-gray-100 hover:bg-gradient-to-r hover:from-primary-700 hover:to-primary-900">
          Contato
        </a>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-2">
        <div className="col-span-1 h-64 rounded-md border p-8">
          <p className="mb-4">Direito Trabalho</p>
          <h2 className="mb-12 pr-56 text-3xl text-gray-900">
            Correção do seu FGTS
          </h2>
          <button className="">Veja como</button>
        </div>
        <div className="col-span-1 h-64 rounded-md border p-8">
          <p className="mb-4">Direito Trabalho</p>
          <h2 className="mb-12 pr-56 text-3xl text-gray-900">
            Correção do seu FGTS
          </h2>
          <button className="">Veja como</button>
        </div>
        <div className="col-span-1 h-64 rounded-md border p-8">
          <p className="mb-4">Direito Trabalho</p>
          <h2 className="mb-12 pr-56 text-3xl text-gray-900">
            Correção do seu FGTS
          </h2>
          <button className="">Veja como</button>
        </div>
        <div className="col-span-1 h-64 rounded-md border p-8">
          <p className="mb-4">Direito Trabalho</p>
          <h2 className="mb-12 pr-56 text-3xl text-gray-900">
            Correção do seu FGTS
          </h2>
          <button className="">Veja como</button>
        </div>
      </div>
    </>
  );
}
