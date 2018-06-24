
if (typeof jQuery == 'undefined'){
	console.log('oops! I still have to link my jQuery properly!');
} else {
	console.log('I did it! I linked jQuery and this js file!')
};


	const $container = $('#container');
	
	const $h1 = $('<h1>').text("Hogwarts");
		$('div').append($h1);

	const $h2 = $('<h2/>').text("Katie Turner");
	$('div').append($h2);

	const $h3 = $('<h3/>').text("Gryffindor");
	$('div').append($h3);


	const $h4 = $('<h4/>').text("leopard");
	$('div').append($h4);	
	$('h4').addClass("pet");
	$($container).append("<h4>Birch Wand with Phoenix Feather Core</h4>")

	
	
	const $ul = $('<ul/>');
	$('#container').append($ul);

	const $li = $('<li/>').text('butter beer');
	$('ul').append($li);
	const $li2 = $('<li2/>').text('invisibilty cloak');
	$($li2).addClass("secret");
	$('ul').append($li2);
	const $li3 = $('<li3/>').text('time turner');
	$($li3).addClass("secret");
	$('ul').append($li3);
	const $li4 = $('<li4/>').text('leash');
	$($li4).addClass("pet");
	$('ul').append($li4);
	const $li5 = $('<li5/>').text('Bertie Botts Every Flavor Beans');
	$('ul').append($li5);


		
const $table = $('<table></table>');
const $thead = $('<thead></thead>');
const $tr = $('<tr></tr>');
const $th = $('<th></th>');
const $td = $('<td></td>');

$container.append($table);
$table.append($thead);
$thead.append($tr);
$tr.append('<th>Day</th>');
$tr.append('<th>Classes</th>');
$thead.append('<tr></tr>');
$tr.append('<td>Monday</td>');
$tr.append('<td>Charms, Quidditch practice, History of Magic</td>');
$thead.append('<tr></tr>');
$thead.append('<tr></tr>');
$thead.append('<tr></tr>');
$thead.append('<tr></tr>');


