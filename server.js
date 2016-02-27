/**
 * node-upload
 * author:ander <anderpang@qq.com>
 */
var http=require("http");
var upload=require("./lib/node-upload");

http.createServer(function(request,response){
  if(request.method === "POST")
  {
      upload(request,function(data){
        console.log(data);
      });
  }
}).listen(80);

