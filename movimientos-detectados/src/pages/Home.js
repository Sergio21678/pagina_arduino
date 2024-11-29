import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user.isAuthenticated) {
    navigate("/dashboard"); // Redirige si el usuario ya está autenticado
    return null;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Bienvenido a nuestro Sistema de Seguridad</h1>
      <p>Por favor, inicia sesión o regístrate para continuar.</p>
      <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
      <button onClick={() => navigate("/register")}>Registrarse</button>
    </div>
  );
}

export default Home;
