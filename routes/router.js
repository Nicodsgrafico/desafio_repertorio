import express from "express";
import { home, agregar, mostrar, editar, eliminar} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", home);

router.post("/cancion", agregar)

router.get("/canciones", mostrar)

router.put("/cancion/:id", editar)

router.delete("/cancion", eliminar)

router.get("*", (req, res) => {
    res.send("No se encontro la ruta");
})

export default router;