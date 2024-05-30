import { pool } from "../config/db.js";

const agregarCancion = async (titulo, artista, tono) => {
    try {
        const sql ={
            text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3)",
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


export { agregarCancion };