const express= require("express");
const bodyParser=require("body-parser");
const app=express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
	
	const d = new Date();
	let day='';
	var currentDay=d.getDay();
	
	switch(currentDay) {
  case 0:
    day="Sunday";
    break;
  case 1:
    day="monday";
    break;
	case 2:
    day="Tuesday";
	case 3:
    day="Wenesday";

    break;
	case 4:
    day="Thursday";
    break;
	case 5:
    day="Friday";
    break;
	case 6:
    day="Saturday";
    break;
	
  default:
    console.log("error "+ currentDay);
}

	res.render("list", {kindOfDay:day});
	});
	
app.listen(3000, function(){
	console.log("server listening to port 3000")
});