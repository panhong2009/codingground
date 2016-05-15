var koa = require('koa');
console.log(koa);
var app = koa();

// logger

app.use(function *(next){
  var start = new Date;
  if(start) return yield next;
 // yield next;
  var ms = new Date - start;
  console.log('%s : %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
  this.body = yield [1,2,3,4];//'Hello World';
 // console.log(~~this.cookies.get(secure));
});

app.listen(3000);