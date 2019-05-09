const modulehttpe = require("http");
modulehttpe.createServer(function(request,response){
	response.end("Hello");

	res
}).listen(3000, "127.0.0.1",function(){
	console.log("Server is running");
});
