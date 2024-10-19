import "./SelectTime.css";

const SelectTime = ({ label, nomeDostimes, requerid, valor, aoDigitar }) => {
  function aoEscrever(event) {
    aoDigitar(event.target.value);
  }

  return (
    <div className="selectTime">
      <label>{label}</label>
      <select value={valor} onChange={aoEscrever} required={requerid}>
        <option value="optionFake" disabled hidden></option>
        {nomeDostimes.map((nomedotime) => {
          return <option key={nomedotime.nome}>{nomedotime.nome}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectTime;
