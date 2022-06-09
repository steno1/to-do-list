const express= require("express");
const bodyParser=require("body-parser");
const app=express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var items=["wake up", "pray"];

app.get("/", function(req, res){
	
	const d = new Date();
	let day='';
	var currentDay=d.getDay();
	
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
 today.toLocaleDateString("en-US", options)

	res.render("list", {kindOfDay:today, newLists:items});
	});
	app.post("/", function(req, res){
		 item1=req.body.newItem;
		 items.push(item1)
		console.log(items);
		res.redirect("/");
	});
	
	
app.listen(3000, function(){
	console.log("server listening to port 3000")
});