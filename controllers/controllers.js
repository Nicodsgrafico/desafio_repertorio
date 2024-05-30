import path from "path";
import { agregarCancion } from "../models/queries.js";

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
};


export const agregar = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    const cancion = await agregarCancion(titulo, artista, tono);
    res.send (cancion);
}