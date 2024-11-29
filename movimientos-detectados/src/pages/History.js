// src/pages/History.js
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function History() {
  const [movements, setMovements] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchMovements = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/sensor_data/");
      const data = await response.json();
      setMovements(data);
    };
    fetchMovements();
  }, []);

  const handleFilter = () => {
    const filtered = movements.filter((movement) =>
      movement.timestamp.startsWith(date)
    );
    setMovements(filtered);
  };

  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: "1rem" }}>
        Historial de Movimientos
      </Typography>
      <TextField
        label="Filtrar por Fecha (YYYY-MM-DD)"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginBottom: "1rem" }}
        fullWidth
        onChange={(e) => setDate(e.target.value)}
      />
      <Button variant="contained" onClick={handleFilter}>
        Filtrar
      </Button>
      <TableContainer component={Paper} style={{ marginTop: "1rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fecha y Hora</TableCell>
              <TableCell>Latitud</TableCell>
              <TableCell>Longitud</TableCell>
              <TableCell>Movimiento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movements.map((movement) => (
              <TableRow key={movement.id}>
                <TableCell>{new Date(movement.timestamp).toLocaleString()}</TableCell>
                <TableCell>{movement.latitude}</TableCell>
                <TableCell>{movement.longitude}</TableCell>
                <TableCell>{movement.pir_state ? "Detectado" : "No Detectado"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default History;
