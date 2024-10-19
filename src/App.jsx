import { v4 as uuidv4 } from "uuid";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import MinhaOrganizacao from "./components/MinhaOrganizacao";
import { useEffect, useState } from "react";
import Time from "./components/Time";
import Footer from "./components/Footer";

import lista from "./assets/db.json";

function App() {
  const [times, setTimes] = useState([
    {
      key: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      key: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      key: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      key: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      key: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      key: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      key: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const listaId = lista.pessoas.map((dado) => ({ ...dado, id: uuidv4() }));
    setColaboradores(listaId);
  }, []);

  // useEffect(() => {
  //   const controle = new AbortController();
  //   const sinal = controle.signal;

  //   const fetchData = async () => {
  //     try {
  //       const resposta = await fetch("http://localhost:8080/pessoas", {
  //         sinal,
  //       });
  //       if (!resposta.ok) {
  //         throw new Error(`Erro na requisição: ${resposta.statusText}`);
  //       }
  //       const dados = await resposta.json();
  //       const dadosComId = dados.map((dado) => ({ ...dado, id: uuidv4() }));
  //       setColaboradores(dadosComId);
  //     } catch (err) {
  //       if (err.name !== "AbortError") {
  //         console.log(`Ocorreu um erro: ${err}`);
  //       }
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     controle.abort();
  //   };
  // }, []);

  const aoMudarVisibilidade = () => {
    setVisivel(!visivel);
  };

  const aoDeletarColaborador = (id) => {
    console.log("Deletando o colaborador");
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const mudarDeCor = (cor, key) => {
    setTimes(
      times.map((time) => {
        if (time.key === key) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const resolverFavoritar = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  };

  return (
    <div>
      <Banner />
      <Formulario
        times={times}
        aoColaboradorCadastrado={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
        aoCadastrarTime={(novoTime) => {
          if (
            times.find(
              (time) => time.nome.toUpperCase() === novoTime.nome.toUpperCase()
            )
          ) {
            alert("Já existe um time com esse nome Digite outro!");
            console.log(novoTime.nome.toUpperCase());
          } else {
            setTimes([...times, { ...novoTime, key: uuidv4() }]);
          }
        }}
        formularioVisivel={visivel}
      />
      <MinhaOrganizacao aoFormularioVisivel={aoMudarVisibilidade} />
      {times.map((time) => {
        return (
          <Time
            aoFavoritar={resolverFavoritar}
            key={time.key}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={aoDeletarColaborador}
            aoMudar={mudarDeCor}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
