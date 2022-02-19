
// Web Application Server
const express = require('express');
const cors = require('cors');
const empleadosRoutes = require("./app/routes/empleado.routes");
const direccionesRoutes = require("./app/routes/direccion.routes");
const productosRoutes = require("./app/routes/producto.routes");
const port = 4500;

// Mongo DB

const bodyParser = require('body-parser');
const { mongoose } = require('./app/models');
const dbConfig = require("./app/config/db.config.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/empleados", empleadosRoutes);
app.use("/api/direcciones", direccionesRoutes);
app.use("/api/productos", productosRoutes);

app.get('/api/test', (req, res) => {
    res.send({message: "Hello World " + new Date()});
});

app.post("/api/test", (req, res) => {
    console.log("body "+JSON.stringify(req.body,null, 2));
    res.send({message: "done"});
});

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Successfully contected to the database");
})
.catch((err)=>{
    console.log("Could not connect to the database, Error:", err);
});

app.listen(4500, function(){
    console.log('running api on http://localhost:' + port);
});


