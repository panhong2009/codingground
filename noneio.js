function noneio(argu,bb/*,function(){console.log('This text is in callback function');}*/){
	setTimeout(function(){console.log(argu);},5000)
	console.log(argu);
	bb(); 
}
noneio('This is a lonly function',function(){console.log('This text is in callback function');});