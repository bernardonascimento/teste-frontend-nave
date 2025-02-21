import { useNavigate } from "react-router";

import { Input } from "../Input";

import "./styles.css";

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login_container">
      <div className="login_card">
        <img src="/logo.png" alt="Logo Navers" />
        <Input label={"E-mail"} />
        <Input label={"Senha"} />
        <div>
          <button className="primary" onClick={handleClick}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
