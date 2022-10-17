const express=require("express")
const app=express()
const mysql=require("mysql")
const cors=require("cors")
const bodyParser=require("body-parser")
const db=mysql.createPool({
host:"localhost",
user:"root",
password:"Bhosale@7714",
database:"IMDBDatabase"
});

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.get("/movies",(req,res)=> {

    const selectQuery="SELECT * FROM Movies";
    db.query(selectQuery,(err,result)=>{
        if(err){
            throw err;
        }
    res.send(result)
    });


})
app.post("/movie",(req,res)=>{
    const movieName=req.body.movieName
    const year=req.body.year
    const plot=req.body.plot
    const actor=req.body.actor
    const producer=req.body.producer
    var act_id;
    var prod_id;
    const q1="SELECT Act_id from Actors WHERE Name=?";
    db.query(q1,actor,(err, result)=>{
        if(err)
        {throw err;}
        else{
          act_id=result[0].Act_id;
        }
    });
    const q2="SELECT Prod_id from Producers WHERE Name=?";
    db.query(q2,producer,(err, result)=>{
        if(err)
        {throw err;}
        else{
          prod_id=result[0].Prod_id;
        }
    });
    const insertQuery="INSERT INTO Movies(Name, `Year of Release`, Plot) values (?,?,?)";
    db.query(insertQuery, [
        movieName,year,plot
    ],(err,result)=>{
        if(err){
            throw err;
        }
        console.log("Data inserted")
    });
    
});

app.delete("/movies/:Movie_id",(req,res)=> {
    const Movie_id=req.params.Movie_id;
    const deleteQuery="DELETE FROM Movies WHERE Movie_id=?";
    db.query(deleteQuery,Movie_id,(err,result)=>{
        if(err){
            throw err;
        }
    console.log(result)
    });


})
app.get("/actor",(req,res)=>{
    
    const q="SELECT Name from Actors";
    db.query(q,(err,result)=>{
        if(err){
            throw err;
        }
       res.send(result);
    });


})
app.get("/producer",(req,res)=>{
    
    const q="SELECT Name from Producers";
    db.query(q,(err,result)=>{
        if(err){
            throw err;
        }
       res.send(result);
    });


})

app.post("/actor",(req,res)=>{
    const actorName=req.body.actorName
    const actorGender=req.body.actorGender
    const actorDob=req.body.actorDob
    const actorBio=req.body.actorBio
    
    const insertQuery="INSERT INTO Actors(Name, Gender, DOB, Bio) values (?,?,?,?)";
    db.query(insertQuery, [
        actorName, actorGender, actorDob,actorBio
    ],(err,result)=>{
        if(err){
            throw err;
        }
        console.log("Data inserted")
    });
    
});


app.post("/producer",(req,res)=>{
    const producerName=req.body.producerName
    const producerGender=req.body.producerGender
    const producerDob=req.body.producerDob
    const producerBio=req.body.producerBio
    
    const insertQuery="INSERT INTO Producers(Name, Gender, DOB, Bio) values (?,?,?,?)";
    db.query(insertQuery, [
        producerName, producerGender, producerDob,producerBio
    ],(err,result)=>{
        if(err){
            throw err;
        }
        console.log("Data inserted")
    });
    
});

app.listen(3001,() => {
    console.log("Running on the port 3001");
});

