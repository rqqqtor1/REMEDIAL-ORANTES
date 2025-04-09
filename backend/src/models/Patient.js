import { Schema, model } from "mongoose";
const patientsSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },

    edad: {
      type: Number,
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

    telefono: {
      type: String,
      required: true,
    },

    isVerified: {
      type: Boolean,
      default: false,  
    },
  },
  {
    timestamps: true, 
    strict: true,     
  }
);




export default model("Patient", patientsSchema, "Patient"); 