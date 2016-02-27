# node-upload
var http=require("http");
var upload=request("./lib/node-upload");

http.createServer(function(request,response){
  if(request.method === "POST")
  {
      upload(request,function(data){
        console.log(data);
      });
  }
});

http.listen(80);
