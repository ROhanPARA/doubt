const express=require("express");
const cors=require("cors");
const {MongoClient}=require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());


app.post("/save",(req,res)=>{
	const url="mongodb+srv://rparab073:px0G8WhRFwTWC8G7@cluster0.mjsa0rw.mongodb.net/?retryWrites=true&w=majority&appName=cluster0";
	const client=new MongoClient(url);
	const db=client.db("doubt25june24");
	const coll=db.collection("student");
	const record={"name":req.body.name,"doubt":req.body.doubt};
	coll.insertOne(record)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
	});


app.listen(9000,()=>{console.log("ready @ 9000");});
