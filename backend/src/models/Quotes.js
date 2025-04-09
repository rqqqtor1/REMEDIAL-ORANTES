import { Schema, model } from "mongoose";

const quotesSchema = new Schema(
  {
    fecha: {
      type: Date,
      required: true,
    },

    hora: {
      type: String,
      required: true,
    },

    motivo: {
      type: String,
      required: true,
    },

    doctorAsignado: {
      type: Schema.Types.ObjectId,
      ref: "Doctor", 
      required: true,
    },

    pacienteAsignado: {
      type: Schema.Types.ObjectId,
      ref: "Patient",  
      required: true,
    },
  },
  {
    timestamps: true,  
    strict: true,      
  }
);

export default model("Quote", quotesSchema, "Quote");