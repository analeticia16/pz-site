export default function Home() {
  return (
    <>
      <nav className="border border-neutral-300">
        <div className="container flex max-w-screen-xl items-center justify-between p-4">
          <a className="font-serif text-3xl font-medium" href="#">
            Pereira Zerger
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-stone-900 hover:bg-gray-200 lg:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
          <ul className="flex flex-col font-medium lg:flex-row">
            <li className="m-4 px-4 py-2 hover:text-gray-500">
              <a href="#" className="flex items-center justify-center">
                Serviços
              </a>
            </li>
            <li className="m-4 px-4 py-2 hover:text-gray-500">Artigos</li>
            <li className="m-4 px-4 py-2 hover:text-gray-500">Sobre</li>
            <li className="m-4 px-4 py-2 hover:text-gray-500">Contato</li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="container max-w-screen-xl px-4 py-4 xl:px-0">
          <h1 className="text-center text-2xl"> Artigos </h1>
        </div>
      </main>
    </>
  );
}
