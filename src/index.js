import express from "express";
import colors from "colors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js"; /* En vez de indexRouter, podés ponerle el nombre que quieras */
const app = express();

/* Guardas la ruta de src en una variable */
const __dirname = dirname(fileURLToPath(import.meta.url));

/* Indicas donde estan guardadas las views */
app.set("views", join(__dirname, "views"));

/* Para poder usar logica dentro de html */
app.set("view engine", "ejs");

/* Ejecuta todas las funciones de indexRouter, es decir, enruta las paginas web */
app.use(indexRouter);

app.use(express.static(join(__dirname, "public")));

app.listen(3000);
console.log("Server is listening on port 3000");
