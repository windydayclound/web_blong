const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();

// *********** Middleware ***********
app.set('view engine', 'ejs');
// app.set('views',path.join(__dirname,'views'));

// *********** Middleware ***********
app.use(helmet()); // for header protection
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ************* Routes *************
// --- login
app.post('/login' , (req, res) =>{
    const{username, password} = req.body;
    if (username == "admin" && password == "1234"){
       res.send("Login OK");  
    }
    else{
        res.status(400).send("Login failed")
    }
})
//------ blog
app.get('/blog' , (req, res) =>{
    const years =[2021, 2020, 2019];
    const posts =[{title: "aaa" , detail: "AAA", year: 2021}, 
    {title: "bbb" , detail: "BBB", year: 2022},
    {title: "ccc" , detail: "CCC", year: 2023},
];
    res.render('blog', {year:years , post:posts});
});


// =============== Page routes ===========
// Root
app.get('/',(req,res)=>{
    const content ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    res.render('index', {content: content});
})


app.get('/singIn',(req,res)=>{
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