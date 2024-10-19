import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import SelectTime from "../SelectTime";
import { v4 as uuidv4 } from "uuid";
import "./Formulario.css";

const Formulario = ({
  times,
  aoColaboradorCadastrado,
  aoCadastrarTime,
  formularioVisivel,
}) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("optionFake");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#000000");

  function aparecerNaTela(e) {
    e.preventDefault();

    if (time !== "optionFake") {
      aoColaboradorCadastrado({
        id: uuidv4(),
        nome: nome,
        cargo: cargo,
        imagem: imagem,
        time: time,
      });
      console.log(nome, cargo, imagem, time);
      setNome("");
      setCargo("");
      setImagem("");
      setTime("optionFake");
    } else {
      alert("Por favor, escolha um time.");
    }
  }
  return formularioVisivel ? (
    <section className="formulario">
      <form onSubmit={aparecerNaTela}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          label="Nome"
          placeholder="Digite seu nome"
          required={true}
          valor={nome}
          minimo={3}
          aoDigitar={(valor) => setNome(valor)}
        />
        <Campo
          label="Cargo"
          placeholder="Digite seu cargo"
          required={true}
          valor={cargo}
          minimo={3}
          aoDigitar={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          required={true}
          valor={imagem}
          aoDigitar={(valor) => setImagem(valor)}
        />
        <SelectTime
          label="Time"
          required={true}
          nomeDostimes={times}
          valor={time}
          aoDigitar={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          aoCadastrarTime({
            nome: nomeTime,
            cor: corTime,
          });

          setNomeTime("");
          setCorTime("#000000");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          required
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          minimo={3}
          aoDigitar={(valor) => setNomeTime(valor)}
        />
        <Campo
          required
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          type="color"
          aoDigitar={(valor) => setCorTime(valor)}
        />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  ) : (
    ""
  );
};

export default Formulario;
