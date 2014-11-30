
window.addEvent('domready',function(){
	var i,f,
		fractals = [
			{	name: 'pythagoras',
				constructor: Pythagoras}
		];
	
	// setup th rest of the fractal stuff.
	for(i=0; i<fractals.length; i++){
		// actually instantiate each fractal.
		f = fractals[i];
		f.instance = new f.constructor(f.name+"_canvas");
	}// end for
});