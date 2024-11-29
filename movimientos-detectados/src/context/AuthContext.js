import React, { createContext, useState, useContext } from "react";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Hook para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Estado inicial del usuario, cargado desde el localStorage
  const [user, setUser] = useState({
    isAuthenticated: !!localStorage.getItem("token"),
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    vehicleInfo: (() => {
      try {
        return JSON.parse(localStorage.getItem("vehicleInfo")) || {};
      } catch {
        return {}; // Si JSON es inválido o vacío, devolver objeto vacío
      }
    })(),
  });

  // Función para iniciar sesión
  const login = (token, name, email, vehicleInfo) => {
    // Guardar los datos en el localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("vehicleInfo", JSON.stringify(vehicleInfo || {}));

    // Actualizar el estado del usuario
    setUser({ isAuthenticated: true, name, email, vehicleInfo });
  };

  // Función para cerrar sesión
  const logout = () => {
    // Limpiar el localStorage
    localStorage.clear();

    // Actualizar el estado del usuario
    setUser({ isAuthenticated: false, name: "", email: "", vehicleInfo: {} });
  };

  // Proveer el contexto con las funciones y el estado del usuario
  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
