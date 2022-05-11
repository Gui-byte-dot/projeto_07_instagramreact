export default function Post() {
    return (
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src="meowed.svg" alt="meowed" />
            meowed
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
  
        <div className="conteudo">
          <img src="gato-telefone.svg" alt="gatotelefone" />
        </div>
  
        <div className="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
  
          <div class="curtidas">
            <img src="respondeai.svg" alt="respondeai" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
  