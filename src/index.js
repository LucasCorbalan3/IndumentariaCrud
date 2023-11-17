import Express from "express";

//console.log('desde mi backend');

const app = Express();

app.set("port", process.env.PORT || 4002);

app.listen(app.get("port"), () => {
  console.log("====================================");
  console.log("Estoy en el puerto " + app.get("port"));
  console.log("====================================");
});

app.get("/", (req, res) => {
  res.send("esto es una prueba de get desde mi backend");
});

app.delete("/borrarProducto", (req, res) => {
  res.send("el producto fue borrado");
});
