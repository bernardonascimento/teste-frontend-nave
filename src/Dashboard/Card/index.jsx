import "./styles.css";

export const Card = ({ id, name, employ }) => {
  return (
    <div className="card_container">
      <img className="avatar" src={`avatar_${id}.png`} alt="Avatar" />
      <p>{name}</p>
      <p>{employ}</p>
      <div>
        <img className="icone" src="/delete.png" alt="Excluir" />
        <img className="icone" src="/edit.png" alt="Editar" />
      </div>
    </div>
  );
};
