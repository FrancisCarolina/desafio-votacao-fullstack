import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        value={props.valor}
        onBlur={props.onBlur}
        type={props.type}
        step={props.step}
      />
    </div>
  );
};
export default CampoTexto;
