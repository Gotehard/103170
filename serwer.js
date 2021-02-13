const express = require("express")
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: "Karty gra"});
})

app.listen(PORT, ()=>{
    console.log(`Serwer działa na porcie ${PORT}`);
})
