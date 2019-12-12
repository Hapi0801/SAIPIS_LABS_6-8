var express = require('express')
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
const fs = require('fs');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index');
})
app.post('/save', (req,res) => {
    try {
            let oldmas  =  JSON.parse(req.body.text_ar);
            let newMas = [];
            oldmas.forEach(element => {
                newMas.push(element[0].toUpperCase() + element.slice(1));
            });
            newMas = newMas.sort();
            fs.writeFileSync("oldmas.txt",JSON.stringify(oldmas));
            fs.writeFileSync("newmas.txt",JSON.stringify(newMas));
            return res.render('page1', {oldmas});
        }catch{
            return res.send("Массив вида [\"element\",\"element\"]");
        }
});
app.post('/sort', (req,res) => {
    let oldmas = JSON.parse(fs.readFileSync("newmas.txt","utf8"));
return res.render('page1',{oldmas});
});
app.listen(3000,()=> {
    console.log("Listen on 3000");
})