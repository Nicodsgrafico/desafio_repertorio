import { pool } from "../config/db.js";

const agregarCancion = async (titulo, artista, tono) => {
    try {
        const sql ={
            text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *",
            values: [titulo, artista, tono]
        }
        const response = await pool.query(sql);
        if(response.rowCount > 0){
            return response.rows[0];
        }else{
            return throwError("No se pudo agregar la cancion");
        }
        console.log(`Cancion: ${res.rowCount} agregada con exito`);
    } catch (error) {
        console.error("Error al agregar la cancion: ", error);
        throw error;
    }
}
const mostrarCanciones = async () => {
    try {
        const sql ={
            text: "SELECT * FROM canciones",
        }
        const response = await pool.query(sql);
        if(response.rowCount > 0){
            return response.rows;
        }else{
            return throwError("No se pudo mostrar las canciones");
        }
    } catch (error) {
        console.error("Error al mostrar las canciones: ", error);
        throw error;
    }
}

const editarCancion = async (id, titulo, artista, tono) => {
    try {
        const sql = {
            text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *",
            values: [titulo, artista, tono, id]
        }
        const response = await pool.query(sql);
        if(response.rowCount > 0){
            return response.rows[0];
        }else{
            return throwError("No se pudo editar la cancion");
        }
    } catch (error) {
            console.error("Error al editar la cancion: ", error);
            throw error;
    }
}

const eliminarCancion = async(id) => {
    try {
        const sql = {
            text: "DELETE FROM canciones WHERE id = $1 RETURNING *",
            values: [id]
        }
        const response = await pool.query(sql);
        if(response.rowCount > 0){
            return response.rows[0];
        }else{
            return throwError("No se pudo eliminar la cancion");
        }
    } catch (error) {
        console.error("Error al eliminar la cancion: ", error);
        throw error;
    }
}
export { agregarCancion, mostrarCanciones, editarCancion, eliminarCancion };