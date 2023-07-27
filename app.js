// ==========> requerimos los modulos para trabajar
const path = require("path");
const express = require("express");
const app = express();
// ==========> creamos la ruta a los archivos estaticos 
const ruta = path.join(__dirname, "public");
const static = express.static(ruta);
app.use(static);


app.get("/",(req,res)=>{
    let ruta = path.join(__dirname, "./views/index.html")
    res.sendFile(ruta);
})
app.get("/register",(req,res)=>{
    let ruta = path.join(__dirname, "./views/register.html")
    res.sendFile(ruta);
})
app.get("/login",(req,res)=>{
    let ruta = path.join(__dirname, "./views/login.html")
    res.sendFile(ruta);
})

// ==========> creamos el servidor y le pasamos un mensaje para verificar su funcionalidad

const port = process.env.PORT || 3001;
app.listen(port,()=>console.log(`servidor corriendo en el puerto ${port}`));