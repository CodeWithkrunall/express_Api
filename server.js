//import express
const express = require ('express');
//creating an application
const app = express();
const port = 3000;

//define routers
app.get('/', (req, res)=>{
    res.send('Hello Word From express');
});

app.get('/web', (req, res)=>{
    res.send('krunal is webdeveloper');
});


 
//start the server
app.listen(port, () =>{
    console.log(`Exampleapp listening at http://localhost${port}`);
})

