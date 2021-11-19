import "./app.css";
import Logo from "./assets/img/logo.png";
import MotivoOne from "./assets/img/motivo-1.png";
import MotivoTwo from "./assets/img/motivo-2.png";
import Button from "./components/Button"
import Section from "./components/Section";
import MOTIVOS from "./constants/motivo";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="logo"/>
        </div>
        <div id="login">
          <select id="idioma">
            <option value="PT">Português</option>
            <option value="ING">Ingles</option>
          </select>
          <Button variante={"sucesso"} text={"Entrar"} />
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
        <Card title="">
          <h1>Teste do children</h1>
        </Card>
        <div>
          <input type="email" placeholder="Email" />
          <Button variante={"alerta"} text={"Vamos lá"} />
        </div>
      </section>
      <hr className="divisor" />
      <Section 
        title={MOTIVOS.ONE.TITLE}
        description="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        image={MotivoOne}/>
      <Section 
        image={MotivoTwo}
        title={MOTIVOS.ONE.TITLE}
        description={MOTIVOS.ONE.DESCRIPTION}
        toggle={true}
        />
      <Section 
        title={MOTIVOS.ONE.TITLE}
        description={MOTIVOS.ONE.DESCRIPTION}
        image={MotivoOne}/>
      <Section 
        image={MotivoTwo}
        title={MOTIVOS.ONE.TITLE}
        description={MOTIVOS.ONE.DESCRIPTION}
        toggle={true}/>
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
