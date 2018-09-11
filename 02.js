var http=require("http");
var queryString=require("querystring");
http.createServer((req,res)=>{
    /*
    * 1 路径 url  方式 post get
    * 2 接收
    * 3 存储
    *
    * */
    //res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/dopost" && req.method.toUpperCase() == "POST"){
        var allData="";
        //开始接收的阶段
        /*
        * 传输数据时 分片段去传输 防止数据量过大 卡崩进程
        * */
        res.addListener("data",function(chunk){
            allData+=chunk;
        });
        //接收完毕,
        res.addListener("end",function(){
            var dataObj = allData.toString();
            var obj = queryString.parse(dataObj);
            var name = obj.username,
                pic = obj.pic,
                sex = obj.sex;
            res.end("success"+name+pic+sex);
        });
    }
}).listen(3000,"127.0.0.1");