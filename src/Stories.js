export default function Stories() {
    const story = [
      { img: "9gag.svg", nome: "ninegag" },
      { img: "meowed.svg", nome: "meowed" },
      { img: "barked.svg", nome: "barked" },
      { img: "nathanwpylestrangeplanet.svg", nome: "nathan" },
      { img: "wawawicomics.svg", nome: "wawawicomics" },
      { img: "respondeai.svg", nome: "respondeai" },
      { img: "filomoderna.svg", nome: "filomoderna" },
      { img: "memeriagourmet.svg", nome: "memeria" }
    ];
    return (
      <div className="stories">
        {story.map((item) => (
          <Story img={item.img} nome={item.nome} />
        ))}
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
  }
  
  function Story(props) {
    return (
      <div className="story">
        <div className="imagem">
          <img src={props.img} alt="imagem" />
        </div>
        <div className="usuario">{props.nome}</div>
      </div>
    );
  }
  