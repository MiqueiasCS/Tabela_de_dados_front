import { Container } from "./styles";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/api/login/`, data)
      .then((response) => {
        toast.success("Login Efetuado!");
        localStorage.setItem("@token", JSON.stringify(response.data.token));

        navigate("/table");
      })
      .catch((e) => {
        toast.error("Sem autorização");
        console.log(e.response);
      });
  };

  return (
    <Container>
      <div className="content">
        <div>Faça seu Login</div>
        <form onSubmit={handleLogin}>
          <div className="input_container">
            <input
              type="email"
              placeholder="Digite seu Email..."
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="input_container">
            <input
              type="password"
              placeholder="Digite sua Senha..."
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
      <Toaster />
    </Container>
  );
};
