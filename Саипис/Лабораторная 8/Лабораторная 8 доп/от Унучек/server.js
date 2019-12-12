// подключение express
var express = require('express')
//Модуль path предоставляет утилиты для работы с путями к файлам и директориям. 
var app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.listen(3000,()=> {
    console.log("Listen on 3000");
})