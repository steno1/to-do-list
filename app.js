const express= require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");


const app=express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

const items=["wake up", "pray"];
const workList=[];
app.get("/", function(req, res){
let today=date.getDate();	
	console.log(req.body);
	

	res.render("list", {listTitle:today, newLists:items});
	});
	
	app.post("/", function(req, res){
		let item=req.body.newItem;
		console.log(req.body);
		
	 if(req.body.list==="Work-List"){
     workList.push(item);	
	res.redirect("/work");

     }else if(req.body.list==="calculator"){
		  workList.push(item);	
	res.redirect("/calculator");
		 
	 }
	 else{
      items.push(item);
        res.redirect("/");	 	
         }

	 
         });
		 
		
	
	
	app.get("/work", function(req, res){
		let steno=date.getDay();
		res.render("list", { listTitle:steno, newLists:workList});
	});
	app.get("/calculator", function(req, res){
		res.render("list", { listTitle:"calculator", newLists:workList});
	});
	app.get("/about", function(req, res){
		res.render("about");
	});
	
	
app.listen(3000, function(){
	console.log("server listening to port 3000")
});

