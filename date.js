
exports.getDate=function(){
	const d = new Date();
	let day='';
	const currentDay=d.getDay();
	
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 const today  = new Date();
 return today.toLocaleDateString("en-US", options);
 
}
exports.getDay=function(){
	const d = new Date();
	let day='';
	const currentDay=d.getDay();
	
	const options = { day: 'numeric', weekday: 'long', month: 'long', day: 'numeric' , year: 'numeric'};
const today  = new Date();
 return today.toLocaleDateString("en-US", options);
	
}