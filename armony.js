function* app(){
	var iny = 0;
	while(iny<2){
		yield iny++;
	}
}
var bpp = app();
console.log(bpp.next());
console.log(bpp.next().done);
console.log(bpp.next());
