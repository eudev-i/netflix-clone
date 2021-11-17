import "./app.css";
import Logo from "./assets/img/logo.png";
import Banner from "./assets/img/banner.jpeg";
import MotivoOne from "./assets/img/motivo-1.png";
import MotivoTwo from "./assets/img/motivo-2.png";


export default function App() {
  return (
    <div>
      <header>
        <div>
          <img src={Logo}/>
        </div>
        <div id="login">
          <select id="idioma">
            <option value="PT">Português</option>
            <option value="ING">Ingles</option>
          </select>
          <button>Entrar</button>
        </div>
      </header>
      <section id="banner">
        <h1>
          Filmes, séries e muito <br />
          mais. Sem limites.
        </h1>
        <h3>Assista onde quiser. Cancele quando quiser.</h3>
        <small
          >Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </small>
        <div>
          <input type="email" placeholder="Email" />
          <button>Vamos Lá</button>
        </div>
      </section>
      <hr className="divisor" />
      <section className="motivos">
        <div>
          <h1>Aproveite na TV.</h1>
          <p>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div>
        <img src={MotivoOne}/>
        </div>
      </section>
      <hr className="divisor" />
      <section className="motivos alterna">
        <div>
          <h1>Aproveite na TV.</h1>
          <p>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div>
          <img src={MotivoOne}/>
        </div>
      </section>
      <hr className="divisor" />
      <section className="motivos">
        <div>
          <h1>Aproveite na TV.</h1>
          <p>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div>
          <img src={MotivoOne}/>
        </div>
      </section>
      <hr className="divisor" />
      <section className="motivos alterna">
        <div>
          <h1>Aproveite na TV.</h1>
          <p>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div>
          <img src={MotivoOne}/>
        </div>
      </section>
      <hr className="divisor" />
      {/* <header>
        {idade == 18 ? "Igual a 18":"Menor que 18"}
        <main>
          <h1 className="vermelho">Olá mundo</h1>
          <img src={exemplo}/>
        </main>
      </header> */}
    </div>
  );
}

// export default App;
