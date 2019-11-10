"// Create main entrypoint for our application " 

const express = require('express');    "// LOADS Express Module "
const app     = express();             "// app OBJECT created" 
const router  = express.Router();      "// PERFORMS routing function "

const path    = __dirname + '/views/'; "// DEFINES Base Dir where view will be"
const port    = 8080;                  "// BINDS app to port number "


router.use(function(req,res,next){     
    console.log('/' + req.method);      
    next();
});

router.get('/', function(req, res){
    res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req, res){
    res.sendFile(path + 'sharks.html')
}); 


app.use(express.static(path));
app.use('/', router);
app.listen(port, function(){
    console.log('Listening on 8080')
})