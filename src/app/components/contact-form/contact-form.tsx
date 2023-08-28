"use client";
import PocketBase from "pocketbase";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  let [loading, setLoading] = useState<boolean>(false);
  let [messageSent, setMessageSent] = useState<boolean>(false);
  let [error, setError] = useState<boolean | null>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const target = event.currentTarget;

    const nome = target.elements.namedItem("nome") as HTMLInputElement;
    const snome = target.elements.namedItem("sobrenome") as HTMLInputElement;
    const telefone = target.elements.namedItem("telefone") as HTMLInputElement;
    const mensagem = target.elements.namedItem("mensagem") as HTMLInputElement;

    const data = {
      Nome: nome.value,
      Sobrenome: snome.value,
      Telefone: telefone.value,
      Mensagem: mensagem.value,
    };

    const pb = new PocketBase("https://projeto-univesp.pockethost.io");

    try {
      const record = await pb
        .collection("Contatos")
        .create(JSON.stringify(data));

      if (record.created) {
        setMessageSent(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-1 py-32 pl-16">
      {messageSent ? (
        <>
          <div className="flex h-full flex-col justify-center text-center">
            <p className="text-lg">Sua mensagem foi enviada com sucesso!</p>
            <div className="mt-4">
              <button
                type="button"
                className="rounded bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white disabled:bg-gray-400"
                disabled={loading}
                onClick={() => setMessageSent(false)}
              >
                Nova mensagem
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex items-center gap-4">
              <div className="w-1/2">
                <label className="mb-2 block text-sm font-semibold text-gray-900">
                  Nome: *
                </label>
                <input
                  type="text"
                  name="nome"
                  className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Digite seu nome"
                  minLength={3}
                  maxLength={50}
                  disabled={loading}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="mb-2 block text-sm font-semibold text-gray-900">
                  Sobrenome: *
                </label>
                <input
                  type="text"
                  name="sobrenome"
                  className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Digite seu sobrenome"
                  minLength={3}
                  maxLength={50}
                  disabled={loading}
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
                  type="number"
                  name="telefone"
                  className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Digite seu telefone com o DDD "
                  minLength={8}
                  maxLength={50}
                  disabled={loading}
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
                  name="mensagem"
                  rows={6}
                  className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Digite sua mensagem"
                  minLength={3}
                  maxLength={300}
                  required
                  disabled={loading}
                ></textarea>
              </div>
            </div>
            {error && (
              <>
                <div className="flex">
                  <p className="text-red-400">
                    Não foi possível enviar a mensagem. Tente novamente mais
                    tarde.
                  </p>
                </div>
              </>
            )}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="w-auto rounded bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white disabled:bg-gray-400"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
