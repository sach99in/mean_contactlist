var express =require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function (req,res){
  console.log("I recived a GET request")
});
app.listen(3000);
console.log("server is running on port 3000");
