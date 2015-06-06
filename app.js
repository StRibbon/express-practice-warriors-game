var express = require("express");
var app = express();
//players[i].name
var players = [
	{id: 30, name: "Stephen Curry", position: "Point guard", img: "http://sorry4theblog.com/wp-content/uploads/2014/07/stephen_curry_46_large.jpg"},
	{id: 11, name: "Kyle Thompson", position: "Point guard", img: "http://www.h3dwallpapers.com/wp-content/uploads/2014/12/Klay_Thompson_07.jpg"}
];

var roster = [];

app.set("view engine","ejs");

app.get("/", function(req,res){
	res.render("index",{players:roster});
})

app.get('/players/add', function (req,res){

})
app.get('/playersadded', function (req,res){
	players.forEach(function(player){
		console.log(req.query);
	if(player.id === Number(req.query.id)){
		roster.push(player);
		res.render("index", {players:roster});
	}
	
  })
})

app.listen(4000, function(){
  console.log('Server Operational @ port 4000');
})