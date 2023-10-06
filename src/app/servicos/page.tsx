import React from "react";

export default function Servicos() {
  return (
    <>
      <div className="bg-[aspect-ratio:3/2] mb-2 h-72 w-full rounded-sm border bg-[url('https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat p-8">
        <h1 className="mb-4 pr-72 text-5xl text-gray-900">
          Conheça nossos principais serviços jurídico
        </h1>
        <p className="mb-12">E veja como podemos te ajudar</p>
        <button className="">Contato</button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1 h-64 rounded-sm border p-8">
          <p className="mb-4">Direito Trabalho</p>
          <h2 className="mb-12 pr-56 text-3xl text-gray-900">
            Correção do seu FGTS
          </h2>
          <button className="">Veja como</button>
        </div>
        <div className="col-span-1 h-64 rounded-sm border p-8"></div>
        <div className="col-span-1 h-64 rounded-sm border p-8"></div>
        <div className="col-span-1 h-64 rounded-sm border p-8"></div>
        <div className="col-span-1 h-64 rounded-sm border p-8"></div>
        <div className="col-span-1 h-64 rounded-sm border p-8"></div>
      </div>
    </>
  );
}
