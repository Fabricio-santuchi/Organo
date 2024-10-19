import "./MinhaOrganizacao.css";

const MinhaOrganizacao = ({ aoFormularioVisivel }) => {
  return (
    <div className="rlt">
      <div className="div-fake"></div>
      <div className="minhaOrganizacao">
        <h2>Minha Organização:</h2>
        <div className="linha"></div>
      </div>
      <div className="btn-add-remove">
        <button onClick={aoFormularioVisivel}>
          <img src="/public/btn-form.png" alt="btn" />
        </button>
      </div>
    </div>
  );
};
export default MinhaOrganizacao;
