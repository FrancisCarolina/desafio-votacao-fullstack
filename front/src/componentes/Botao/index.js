import "./Botao.css";

const Botao = (props) => {
  return (
    <button
      className="botao"
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Botao;
