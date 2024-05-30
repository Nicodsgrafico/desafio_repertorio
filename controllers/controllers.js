import path from "path";
import { agregarCancion, mostrarCanciones, editarCancion , eliminarCancion} from "../models/queries.js";

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
};


export const agregar = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    const cancion = await agregarCancion(titulo, artista, tono);
    res.send (cancion);
}

export const mostrar= async (req, res) => {
    const canciones = await mostrarCanciones();
    res.send(canciones);
}
export const editar = async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const cancion = await editarCancion(id, titulo, artista, tono);
    res.send(cancion);
}

export const eliminar = async (req,res)=>{
    const {id} = req.query;
    const cancion = await eliminarCancion(id);
    res.send(cancion);
}