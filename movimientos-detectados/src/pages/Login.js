import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token, data.name, email, data.vehicleInfo); // Aquí se pasa la información del usuario
        navigate("/dashboard"); // Redirige después de iniciar sesión
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
    }
  };

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Typography variant="h4">Iniciar Sesión</Typography>
      {error && (
        <Typography color="error" style={{ marginTop: "1rem" }}>
          {error}
        </Typography>
      )}
      <TextField
        label="Correo Electrónico"
        type="email"
        fullWidth
        style={{ marginTop: "1rem" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Contraseña"
        type="password"
        fullWidth
        style={{ marginTop: "1rem" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handleLogin}
      >
        Iniciar Sesión
      </Button>
    </Container>
  );
}

export default Login;
