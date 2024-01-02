// Crea la variable de referncia del lienzo usando fabric.Canvas()
var canvas = new fabric.Canvas('myCanvas'); 

//Define el ancho inicial y el alto del cloque de imágenes 
player_x = 10; 
player_y = 10;

//Define el inicio de las coordenadas  y Y del jugador 
block_image_width = 30; 
block_image_height = 30; 

// Define una variable llamada player_object para almacenar la imagen del jugador
var player_object= "";
var block_image_object= "";

// Agrega una función llamada player_update() para agregar la imagen del jugador 
function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y, left:player_x});
	canvas.add(player_object);
	});
}

// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

// Agrega un evento listener y llama la función requerida
window.addEventListener("keydown", my_keydown);

// Define la función mi_TeclaPulsada
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

// Verifica si las teclas SHIFT y P son presionadas juntas
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Presiona p y Shift juntos");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}

// Verifica si las teclas SHIFT y M son presionadas juntas
if(e.shiftKey && keyPressed == '77')
{
	console.log("Presiona m y Shift juntos");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

    // Verifica si el valor de la tecla es igual al del valor de la tecla de flecha ARRIBA 38
	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}

	// Verifica si el valor de la tecla es igual al del valor de la tecla de flecha ABAJO 40
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}

	// Verifica si el valor de la tecla es igual al del valor de la tecla de flecha IZQUIERDA 37
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}

	// Verifica si el valor de la tecla es igual al del valor de la tecla de flecha DERECHA 39
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'W' 87
	if(keyPressed == '87')
	{
		new_image('wall.jpg'); 
		console.log("w");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'G' 71
	if(keyPressed == '71')
	{
		new_image('ground.png'); 
		console.log("g");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'L' 76
	if(keyPressed == '76')
	{
		new_image('light_green.png'); 
		console.log("l");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'T' 84
	if(keyPressed == '84')
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'R' 82
	if(keyPressed == '82')
	{
		new_image('roof.jpg'); 
		console.log("r");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'Y' 89
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'D' 68
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'U' 85
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}

	// Verifica si el valor de la tecla es igual al valor de la tecla 'C' 67
	if(keyPressed == '67')
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}

// Función para mover al jugador hacia arriba cuando la tecla de la flecha hacia ARRIBA es presionada.
function up()
{
	if(player_y >=0)
{
player_y = player_y - block_image_height;
console.log("altura del bloque =" + block_image_height);
console.log("Cuando se presiona la flecha hacia arriba, X = " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
}

}


// Función para mover al jugador hacia abajo cuando la tecla de la flecha hacia ABAJO es presionada.
function down()
{
	if(player_y <=500)
	{
	player_y = player_y + block_image_height;
	console.log("altura del bloque =" + block_image_height);
	console.log("Cuando se presiona la flecha hacia abajo, X = " + player_x + " , Y = "+player_y);
	canvas.remove(player_object);
	player_update();
	}
}

// Función para mover al jugador hacia la izquierda cuando la tecla de la flecha IZQUIERDA es presionada.
function left()
{
	if(player_x >=0)
{
player_x = player_x - block_image_width;
console.log("altura del bloque =" + block_image_width);
console.log("Cuando se presiona la flecha izquierda, X = " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
}

}

// Función para mover al jugador hacia la derecha cuando la tecla de la flecha DERECHA es presionada.
function right()
{
	if(player_x <=850)
	{
	player_x = player_x + block_image_width;
	console.log("altura del bloque =" + block_image_width);
	console.log("Cuando se presiona la flecha derecha, X = " + player_x + " , Y = "+player_y);
	canvas.remove(player_object);
	player_update();
	}
}
