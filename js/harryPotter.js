
if (typeof jQuery == 'undefined'){
	console.log('oops! I still have to link my jQuery properly!');
} else {
	console.log('I did it! I linked jQuery and this js file!')
};



	const $h1 = $('<h1>').text("Hogwarts");
		$('body').append($h1);

	const $h2 = $('<h2/>').text("Katie Turner");
	$('body').append($h2);

	const $h3 = $('<h3/>').text("Gryffindor");
	$('body').append($h3);


	const $h4 = $('<h4/>').text("Leopard");
	$('body').append($h4);	
	$('h4').addClass("leopard");
	
	



// const addText = () => {
// 	// We want to add a p tag with text to the body
// 	// 1. create a p tag
// 	const $p = $('<p/>');
// 	$p.text('im reall boyyyyyyyy');
// 	$('body').append($p);
// }