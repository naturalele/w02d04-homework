
if (typeof jQuery == 'undefined'){
	console.log('oops! I still have to link my jQuery properly!');
} else {
	console.log('I did it! I linked jQuery and this js file!')
};



	const $h1 = $('<h1>').text("Hogwarts");
		$('body').append($h1);



// const addText = () => {
// 	// We want to add a p tag with text to the body
// 	// 1. create a p tag
// 	const $p = $('<p/>');
// 	$p.text('im reall boyyyyyyyy');
// 	$('body').append($p);
// }