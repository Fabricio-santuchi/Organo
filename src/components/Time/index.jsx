import "./Time.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, aoMudar, aoFavoritar }) => {
  return colaboradores.length > 0 ? (
    <section
      className="card"
      style={{
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: hexToRgba(time.cor, 0.4),
      }}
    >
      <input
        value={time.cor}
        onChange={(evento) => aoMudar(evento.target.value, time.key)}
        type="color"
        className="inputColor"
      />
      <h2>{time.nome}</h2>
      <div className="linha" style={{ backgroundColor: time.cor }}></div>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              key={colaborador.id}
              time={time}
              colaborador={colaborador}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};
export default Time;
