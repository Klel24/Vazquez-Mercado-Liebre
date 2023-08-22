const express = require ("express"); //llamo a el modulo express
const path = require("path"); //llamo al module path para que luego resuelva las rutas

const app = express(); //asigno  la funcion express a una constante

app.use(express.static(path.join(__dirname, "../public"))); //agrego la ruta absolutaa la carpeta publica

const PORT = 3001; //asigno el puerto que voy a usar a una variable para luego usar siempre la variable

app.listen(PORT, () =>{
    console.log ("Se prendió en el puerto " + PORT);  //prendo el servidor
});

app.get ("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/home.html")); //le asigno home.html al home
});
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});
  
  app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});

//app.get ("/", (req, res) =>{
// res.send ("Hola");
//});
//Archivos publicos--> Css Estilos; Img: images; Js: front 
 