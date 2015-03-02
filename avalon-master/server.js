var http=require('http');
var fs = require('fs');

http.createServer(function(req,res){

	fs.createReadStream('www'+req.url).pipe(res).on('error',function(){
		res.writeHeader(404, {});
		res.end('404');
	})
	
}).listen(8080,function(){
	console.log('running at 8080')
}) 