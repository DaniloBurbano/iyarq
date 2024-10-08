const express =  require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3007;

/* Access to the static resources folder is configured */
app.use(express.static("public"));

/* EJS is configured as the app's template engine */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./views/"));

app.get("/", (req, res) => {
  res.render('index', {
    title: "Servicios de Ingeniería hidráulica, Arquitectura e Ingeniería estructural",
    stylesheetFile: "index.css"
  })
});

// app.get('/services', (req,res)=>{
//   res.render('services')
// });

app.get('/sitemap.xml', (req,res)=>{
  res.sendFile(path.resolve(__dirname, "./sitemap.xml"))
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});


