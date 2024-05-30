import express from "express";
import { home, agregar} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", home);

router.post("/cancion", agregar)

router.get("*", (req, res) => {
    res.status(404).send("Not Found");
})

export default router;