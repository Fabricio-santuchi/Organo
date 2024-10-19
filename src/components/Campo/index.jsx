import "./Campo.css";

const Campo = ({
  label,
  placeholder,
  requerid,
  aoDigitar,
  valor,
  minimo,
  type = "text",
}) => {
  function aoEscrever(event) {
    aoDigitar(event.target.value);
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        value={valor}
        minLength={minimo}
        onChange={aoEscrever}
        type={type}
        placeholder={placeholder}
        required={true}
      />
    </div>
  );
};

export default Campo;
