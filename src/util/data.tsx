type Servico = {
  id: number;
  titulo: string;
  descricao: string;
  icone: Function;
};

type Parceiro = {
  imagem: string;
  nome: string;
  atuacao: string;
};

const servicos: Servico[] = [
  {
    id: 1,
    titulo: "Correção do FGTS",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.",
    icone: MoneySVG,
  },
  {
    id: 2,
    titulo: "Acidente de trabalho",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.",
    icone: AcidenteSVG,
  },
  {
    id: 3,
    titulo: "Rescição indireta",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.",
    icone: RescisaoSVG,
  },
  {
    id: 4,
    titulo: "Assédio Moral",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.",
    icone: AssedioSVG,
  },
  {
    id: 5,
    titulo: "Ação Revisional de Veículos",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.",
    icone: RevisionalSVG,
  },
  {
    id: 6,
    titulo: "Seguros",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.",
    icone: SegurosSVG,
  },
  {
    id: 7,
    titulo: "Inventários",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.",
    icone: InventariosSVG,
  },
  {
    id: 8,
    titulo: "Divórcio",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis sapien eu egestas rhoncus. Maecenas dignissim, elit et mattis gravida, lacus leo pulvinar nisl, id vulputate metus dolor at nulla.",
    icone: DivorcioSVG,
  },
];

const parceiros: Parceiro[] = [
  {
    nome: "Nome sobrenome",
    atuacao: "Área de atuação",
    imagem:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    nome: "Nome sobrenome",
    atuacao: "Área de atuação",
    imagem:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    nome: "Nome sobrenome",
    atuacao: "Área de atuação",
    imagem:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    nome: "Nome sobrenome",
    atuacao: "Área de atuação",
    imagem:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    nome: "Nome sobrenome",
    atuacao: "Área de atuação",
    imagem:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    nome: "Nome sobrenome",
    atuacao: "Área de atuação",
    imagem:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function MoneySVG() {
  return (
    <>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          fill="currentColor"
          d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729 0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z"
        />
      </svg>
    </>
  );
}

function AcidenteSVG() {
  return (
    <>
      <svg
        width="24"
        height="24"
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
          fill-rule="nonzero"
        />
      </svg>
    </>
  );
}

function RescisaoSVG() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21.312 12.644c-.598-.731-2.312-2.699-3.766-4.356l-1.241 2.565h-1.998l-.766 1.766h-2.271l-.766 1.809-3.772.425c1.9 2.303 3.742 4.529 3.773 4.568.371.493.427 1.119.15 1.673-.277.555-.812.886-1.429.886-.919 0-1.409-.655-1.549-1.216-.157-.629.011-1.208.604-1.654l-1.277-1.545c-.823.665-1.278 1.496-1.377 2.442-.233 2.205 1.525 3.993 3.614 3.993.595 0 1.311-.177 1.84-.51l9.427-5.946c.957-.664 1.492-1.781 1.492-2.897 0-.744-.24-1.454-.688-2.003zm-2.1 3.323c-.773.497-5.341 3.376-6.386 4.035-.074-.721-.358-1.391-.826-1.948l-1.355-1.633 1.248-.142.703-1.66h2.259l.766-1.766h1.939l.453-.936 1.576 1.81c.621.693.458 1.705-.377 2.24zm-11.22-2.763c-1.458-1.774-2.896-3.536-3.515-4.328-.47-.601-.575-1.246-.296-1.817.268-.549.842-.918 1.431-.918.918 0 1.408.655 1.548 1.215.161.641-.035 1.231-.623 1.685l1.329 1.624 6.05-3.451 1.596 1.833.959-1.982-.774-.878c1.391-1.058 1.778-2.974.894-4.481-.616-1.053-1.757-1.706-2.975-1.706-1.188 0-.793-.016-9.566 4.475-1.233.591-2.05 1.787-2.05 3.202 0 .87.308 1.756.889 2.487.49.616 1.539 1.896 2.702 3.311l.649-.076 1.752-.195zm5.027-11.052c.188-.087.399-.134.609-.134.533 0 .998.281 1.244.752.312.596.225 1.469-.547 1.912l-5.099 2.888c-.05-1.089-.578-2.081-1.454-2.732l5.247-2.686z"
        />
      </svg>
    </>
  );
}

function AssedioSVG() {
  return (
    <>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          fill="currentColor"
          d="M3.439 3l-1.439-1.714 1.532-1.286 17.382 20.714-1.533 1.286-2.533-3.019h-5.848l-7 5.02v-5.02h-4v-15.981h3.439zm11.747 14l-10.068-11.999h-3.118v11.999h4v3.105l4.357-3.105h4.829zm8.814 1.981h-2.588l-1.662-1.981h2.25v-11.999h-12.319l-1.679-2.001h15.998v15.981z"
        />
      </svg>
    </>
  );
}

function RevisionalSVG() {
  return (
    <>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm9 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm4-1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-17.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.318 3.168c-.761-1.413-1.699-3.17-2.684-4.812-.786-1.312-1.37-1.938-2.751-2.187-1.395-.25-2.681-.347-4.585-.347s-3.19.097-4.585.347c-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.412-.98 3.806 0 1.318.42 2.415 1 3.817v2.209c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-2.209c.58-1.403 1-2.499 1-3.817 0-1.394-.293-2.533-.98-3.806zm-15.641-3.784c.67-1.117.852-1.149 1.39-1.246 1.268-.227 2.455-.316 4.231-.316s2.963.088 4.231.316c.538.097.72.129 1.39 1.246.408.681.81 1.388 1.195 2.081-1.456.22-4.02.535-6.816.535-3.048 0-5.517-.336-6.805-.555.382-.686.779-1.386 1.184-2.061zm11.595 10.616h-11.948c-1.671 0-3.026-1.354-3.026-3.026 0-1.641.506-2.421 1.184-3.678 1.041.205 3.967.704 7.816.704 3.481 0 6.561-.455 7.834-.672.664 1.231 1.166 2.01 1.166 3.646 0 1.672-1.355 3.026-3.026 3.026zm5.526-10c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202z"
          />
        </svg>
      </svg>
    </>
  );
}

function SegurosSVG() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z"
        />
      </svg>
    </>
  );
}

function InventariosSVG() {
  return (
    <>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          fill="currentColor"
          d="M24 7h-1v16h-22v-16h-1v-6h24v6zm-2 0h-20v15h20v-15zm-6 8h-8v-4h8v4zm-1-3h-6v2h6v-2zm8-10h-22v4h22v-4z"
        />
      </svg>
    </>
  );
}

function DivorcioSVG() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20.516 13.453l3.484-.891-1.932-7.562-3.526.891.196.753c-1.796.24-2.544-.226-4.459-1.226-.498-.257-.972-.418-1.408-.418-.592 0-1.108.268-1.503.714l-.491.552c-1.956-1.525-3.178-.405-4.505.084-.364.135-.793.185-1.087.202l.173-.662-3.526-.89-1.932 7.562 3.484.891.182-.695c.316.06 1.509.291 1.733.347-.649 1.055.01 2.357 1.199 2.495.226.545.741.932 1.34 1.003.225.544.736.928 1.332.997.33.815 1.305 1.267 2.232.863.352.354.841.537 1.356.537.703 0 1.349-.344 1.674-1.012.574-.12 1.052-.498 1.296-1.01.552-.115 1.031-.47 1.285-1.002.759-.154 1.378-.773 1.457-1.602.031-.312-.03-.624-.155-.91.289-.16 1.442-.647 1.886-.833l.215.822zm.686-6.996l1.338 5.24-1.165.298-1.366-5.237 1.193-.301zm-18.577 5.538l-1.165-.298 1.338-5.24 1.193.301-1.366 5.237zm3.766 2.484c-.294-.221-.331-.645-.08-.942l.61-.749c.249-.298.69-.363.986-.14.295.223.33.644.08.944l-.609.747c-.25.299-.693.361-.987.14zm1.336 1c-.296-.224-.337-.636-.086-.936l.616-.754c.25-.3.69-.363.984-.142.295.222.33.646.082.943l-.617.755c-.25.301-.682.356-.979.134zm1.336 1c-.295-.222-.333-.645-.082-.945l.609-.745c.251-.299.69-.364.986-.142.295.223.331.645.08.944l-.608.747c-.25.3-.691.361-.985.141zm2.93.108l-.61.75c-.251.302-.691.363-.986.142-.295-.222-.331-.645-.082-.943l.612-.751c.252-.298.693-.362.987-.139.296.221.332.644.079.941zm1.28 1.11c-.12.092-.266.138-.415.138-.16 0-.315-.069-.448-.176l.358-.441c.159-.187.269-.412.332-.65l.24.212c.251.285.218.694-.067.917zm3.873-3.017c-.289.222-.719.168-.967-.114l-1.944-1.669c-.16-.138-.37.107-.208.242l1.896 1.628c.248.285.217.696-.068.916-.276.218-.712.181-.969-.114l-1.491-1.308c-.161-.139-.37.102-.213.241l1.457 1.279c.249.285.211.686-.075.909-.28.218-.708.184-.96-.106l-.45-.402-.002-.225c-.089-.78-.711-1.352-1.449-1.434-.224-.547-.737-.93-1.335-.998-.218-.535-.726-.93-1.334-1-.397-.975-1.636-1.334-2.549-.679-.425-.133-1.852-.45-2.434-.564l.836-3.204c.783-.037 1.694-.132 2.902-.705.864-.411 1.278-.599 2.067-.013-.507.507-1.027.955-1.562 1.268-.48.28-.688.837-.531 1.419.181.668.856 1.343 1.96 1.343s2.924-1.014 3.279-1.502c1.472 1.391 2.902 2.684 4.143 3.796.35.39.285.776.001.996zm.526-2.537c-.837-.753-2.728-2.463-3.407-3.143-.289-.288-.691-.619-1.244-.619-.49 0-.878.267-1.128.468-.573.462-2.019 1.378-2.592.92 1.161-.754 2.208-1.943 3.192-3.063.24-.273.587-.219 1.1.044 2.153 1.125 3.007 1.666 5.538 1.394l.779 2.987c-.5.199-1.823.78-2.238 1.012z"
        />
      </svg>
    </>
  );
}

export { servicos, parceiros };
