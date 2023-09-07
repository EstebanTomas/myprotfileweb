const express = require("express");
const app = express();
const path = require("path");

// importación de archivos
const RouterOne = require("./routers/mainRouter");

// puerto de acceso http 
const PORT = 8080;
app.listen(PORT, (req, res) => {
    console.log(`running in port http://localhost:8080`);
});
// ruta principal
// app.get("/", (req, res) => {
//     res.send("in game")
// })

// implementación de la carpeta publica 
const PublicPath = path.join(__dirname, "../public");
app.use(express.static(PublicPath));
// implementación de ejs 
// 1 indico la dirección a la carpeta "views"
// 2 declaro un motor de plantillas, en este caso 'ejs'
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

// el método use() funciona como Middleware y especifica una dirección de entrada en el primer parametro y redirecciona a lo que haya en el segundo parametro.
// en este caso; la ruta "/", se direcciona hacía "RouterOne = './routers/mainRouters".
app.use("/", RouterOne);


// CARACTERISTICAS DE ESTE ARCHIVO
// 