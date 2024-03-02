import { Router } from "express";
import {   borrar, crearRecurso, getInventory  } from "../controller/inventory";

const router = Router();

//ruta para obtener todos los inventarios
router.get('/inventory', getInventory)
//ruta para crear recursos en el inventario 
router.post('/inventory', crearRecurso)
//ruta para eliminar
router.delete('/inventory/:id', borrar)


export default router