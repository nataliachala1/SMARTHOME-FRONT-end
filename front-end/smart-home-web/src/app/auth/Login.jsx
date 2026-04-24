import { useState } from "react";
import { useAuth } from "../../modules/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);

    navigate("/dashboard");

  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Iniciar sesión</h2>

<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type ="subtmit">
        Ingresar
      </button>
      </form>
    </div>
  );
}