import "./Colaborador.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Colaborador = ({ time, colaborador, aoDeletar, aoFavoritar }) => {
  const favoritar = () => {
    aoFavoritar(colaborador.id);
  };

  const propsFavoritar = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      <IoCloseCircleSharp
        onClick={() => aoDeletar(colaborador.id)}
        className="btnClose"
      />
      <div className="parteCima" style={{ backgroundColor: time.cor }}></div>
      <div className="parteBaixo"></div>
      <img src={colaborador.imagem} alt={colaborador.nome} />
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <FaHeart color="red" {...propsFavoritar} />
          ) : (
            <FaRegHeart {...propsFavoritar} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Colaborador;
