import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
        navigate("/login");
      } else {
        const data = await response.json();
        setError(data.error || "Error al registrar usuario.");
      }
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Typography variant="h4">Registrarse</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Nombre de Usuario"
        fullWidth
        style={{ marginTop: "1rem" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
        onClick={handleRegister}
      >
        Registrarse
      </Button>
    </Container>
  );
}

export default Register;
