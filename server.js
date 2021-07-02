const express = require("express")
const actors = require("./header")


const app =express()

const port = 5000

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res) => {
    res.json("welcome")
})
app.get("/actorsapi/v1/actors", (req,res) => {
    res.json(actors)
})
//get an actors
app.get("/actorsapi/v1/actors/:name",(req,res) =>{
    res.json(actors.filter((actors) => actors.name===req.params.name))
});

app.post("/actorsapi/v1/actors",(req,res) =>{
    const newa = {
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        id:req.body.id,
    };
    actors.push(newa);

    res.json(actors);

    
})
//update an actress
app.put("/actorsapi/v1/actors/:name",(req,res) =>{
    const actorsFound=actors.some((actors)=>actors.name===req.params.name);
    actorsFound &&
    actors.forEach((actors)=> {
        actors.name===req.params.name && (
        actors.name=req.body.name,
        actors.age=req.body.age,
        actors.gender=req.body.gender    )    
    });
    res.json(actors)
})
// delete an actors
app.delete("/actorsapi/v1/actors/:name",(req,res) =>{
    res.json(actors.filter((actors) => actors.name!==req.params.name))
})

app.listen(port, () => console.log(`server is running ${port}`)) 