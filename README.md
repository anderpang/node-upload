# node-upload

## DESCRIPTION
处理表单POST提交的数据。

###优点：
无需安装。
只有一个文件,体积小，运行快！
文件直接保存在所需路径，比formidable模块保存在临时文件夹，再移动文件少一步操作。
可以指定上传路径、文件类型，还可以限制上传文件大小，超出限定的文件不做处理，提高执行效率。

###局限：
只能处理POST过来的数据。

## USAGE

```
/* simple example */

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
```

```
/* detailed example */

var http=require("http");
var upload=require("./lib/node-upload");

http.createServer(function(request,response){

  upload(request,{
        savepath:__dirname+"/images",
        maxsize:2048,    //2M
        extname:".gif,.jpg,.png"   //“*”不限
      },
      function(post){
        response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
        var sys=require("sys");
        response.write(sys.inspect(post));
        response.end();
  });
  
}).listen(80);
```



## AUTHORS

Ander Pang (anderpang@foxmail.com)

2014/2/15制作，那时还不懂得发布。
