import "./Botao.css";

const Botao = (props) => {
  return (
    <button className="botao" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default Botao;
