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
            <li className="m-4 px-4 py-2 hover:bg-gray-300">Serviços</li>
            <li className="m-4 px-4 py-2 hover:bg-gray-300">Artigos</li>
            <li className="m-4 px-4 py-2 hover:bg-gray-300">Sobre</li>
            <li className="m-4 px-4 py-2 hover:bg-gray-300">Contato</li>
          </ul>
        </div>
      </nav>
      <main className="container max-w-screen-xl py-4">
        <section id="contato" className="py-16">
          <h2 className="text-center text-2xl"> Parceiros </h2>
        </section>
        <section id="artigos" className="py-16">
          <h2 className="text-center text-2xl"> Artigos </h2>
          <div className="grid grid-cols-3 gap-12">
            {[1, 2, 3].map((n) => (
              <>
                <div className="py-4">
                  <Image
                    src={ArticlePic}
                    alt="article"
                    className="h-64 w-full object-cover"
                  />
                  <span className="mt-3 inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium tracking-widest text-black">
                    Direitos Humanos
                  </span>
                  <h3 className="mt-2 text-justify text-xl font-medium">
                    STF invalida uso da legítima defesa da honra em
                    feminicídios.
                  </h3>
                  <p className="mt-4 text-justify text-base leading-relaxed text-slate-600">
                    Em decisão unânime, STF entendeu que o uso da tese contraria
                    os princípios constitucionais da dignidade humana, da
                    proteção à vida e da igualdade de gênero.
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="mt-4 flex items-center px-4 py-2 uppercase text-gray-950 hover:bg-gray-300"
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
      </main>
    </>
  );
}
