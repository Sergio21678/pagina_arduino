import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MovementsTable from "../components/MovementsTable";
import { Typography, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido, {user.name || "Usuario"} {/* Mostrar el nombre del usuario */}
      </Typography>
      <Card style={{ marginBottom: "2rem" }}>
        <CardContent>
          <Typography variant="h6">Información del Vehículo</Typography>
          {user.vehicleInfo.marca ? (
            <>
              <Typography>Marca: {user.vehicleInfo.marca}</Typography>
              <Typography>Modelo: {user.vehicleInfo.modelo}</Typography>
              <Typography>Año: {user.vehicleInfo.año}</Typography>
              <Typography>Placa: {user.vehicleInfo.placa}</Typography>
            </>
          ) : (
            <Typography>No hay información del vehículo registrada.</Typography>
          )}
        </CardContent>
      </Card>
      <MovementsTable />
    </div>
  );
}

export default Dashboard;
