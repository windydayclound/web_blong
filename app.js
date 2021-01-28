const express = require('express');
const path = require('path');

const app = express();

// *********** Middleware ***********
app.set('view engine', 'ejs');
// app.set('views',path.join(__dirname,'views'));

// *********** Middleware ***********
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ************* Routes *************
// --- login
app.post('/login' , (req, res) =>{
    const{usernsme, password} = req.body;
    // if (){
    //    res.send("Login OK");  
    // }
   
})

// =============== Page routes ===========
// Root
app.get('/',(req,res)=>{
    res.render('index');
})


app.get('/singnIn',(req,res)=>{
    res.render('login');
})

// =============== Other routes ===========


// 404, must be the last service
app.use((req, res) => {
    res.status(404).end();
})

// *********** Starting server ***********

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is starting at port " + PORT)
})