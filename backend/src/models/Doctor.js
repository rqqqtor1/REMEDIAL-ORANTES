import { Schema, model } from "mongoose";

// Esquema para el modelo de Doctores
const doctorsSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },

    especialidad: {
      type: String,
      required: true,
    },

    correo: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    },

    contraseña: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
    strict: true, 
  }
);

export default model("Doctor", doctorsSchema,"Doctor");