const doctorsController = {};
import doctorsModel from "../models/doctors.js";

// SELECT (Obtener todos los doctores)
doctorsController.getDoctors = async (req, res) => {
  try {
    const doctors = await doctorsModel.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener doctores", error });
  }
};

// INSERT (Crear un nuevo doctor)
doctorsController.createDoctor = async (req, res) => {
  const { nombre, especialidad, correo, contraseña } = req.body;

  const existingDoctor = await doctorsModel.findOne({ correo });
  if (existingDoctor) {
    return res.status(400).json({ message: "El correo ya está registrado" });
  }

  const newDoctor = new doctorsModel({ nombre, especialidad, correo, contraseña });

  try {
    await newDoctor.save();
    res.json({ message: "Doctor creado exitosamente", doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el doctor", error });
  }
};

// DELETE (Eliminar un doctor por ID)
doctorsController.deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await doctorsModel.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: "Doctor no encontrado" });
    }
    res.json({ message: "Doctor eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el doctor", error });
  }
};

// UPDATE (Actualizar los datos de un doctor)
doctorsController.updateDoctor = async (req, res) => {
  const { nombre, especialidad, correo, contraseña } = req.body;
  
  try {
    const updatedDoctor = await doctorsModel.findByIdAndUpdate(
      req.params.id,
      { nombre, especialidad, correo, contraseña },
      { new: true }
    );
    if (!updatedDoctor) {
      return res.status(404).json({ message: "Doctor no encontrado" });
    }
    res.json({ message: "Doctor actualizado exitosamente", doctor: updatedDoctor });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el doctor", error });
  }
};

export default doctorsController;