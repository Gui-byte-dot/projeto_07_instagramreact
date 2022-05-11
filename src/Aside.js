export default function Aside() {
    const nomes = { usuario: "catanacomics", name: "catana" };
    const sugestoesParaUsuario = [
      { img: "bad.vibes.memes.svg", name: "badvibememes" },
      { img: "chibirdart.svg", name: "chibdart" },
      { img: "adorable_animals.svg", name: "animals" },
      { img: "razoesparaacreditar.svg", name: "razoes" },
      { img: "smallcutecats.svg", name: "cats" }
    ];
  
    return (
      <aside>
        <div className="usuario">
          <img src="catanacomics.svg" alt="catanacomics" />
          <div className="texto">
            {nomes.usuario}
            {nomes.name}
          </div>
        </div>
        <div className="sugestoes">
          <div className="titulo">
            Sugestoes para voce
            <div>Ver Tudo</div>
          </div>
          {sugestoesParaUsuario.map((sugestao) => (
            <Sugestao img={sugestao.img} name={sugestao.name} />
          ))}
        </div>
        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </aside>
    );
  }
  console.log("oi");
  
  function Sugestao(props) {
    return (
      <div className="sugestao">
        <div className="usuario">
          <img src={props.img} alt="user" />
          <div className="texto">
            <div className="nome">{props.name}</div>
            <div className="razao">Segue você</div>
          </div>
        </div>
        <div className="seguir">Seguir</div>
      </div>
    );
  }
  