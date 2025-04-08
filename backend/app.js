import express from "express";

import doctorsRoutes from "./src/routes/doctorRoute";

// Que acepte datos en json
app.use(express.json());
// Que acepte cookies
app.use(cookieParser());

app.use("/api/doctors", doctorsRoutes);