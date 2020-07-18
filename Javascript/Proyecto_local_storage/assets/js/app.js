//Variables

//tomar la lista de tweets que tengo en el html (vacío inicialmente)
const lista_tweets = document.querySelector('#lista-tweets');


//Event listeners

event_listeners();

function event_listeners(){
	//Cuando se envía el formulario
	document.querySelector('#formulario').addEventListener('submit', agregar_tweet);

	//borrar tweets, si el user hizo clic en la x
	lista_tweets.addEventListener('click', borrar_tweet);

	//listar contenido en el DOM, en el caso de que hayan tweets en el local storage
	//DOMContentLoaded -> un event listener que se ejecuta cuando todo el html se ha cargado
	document.addEventListener('DOMContentLoaded', local_storage_listo);

}

//funciones

function agregar_tweet(event){
	event.preventDefault();
	
	//leer el contenido del text area
	const tweet = document.getElementById('tweet').value;

	//agregando el tweet al DOM
	insertar_tweet_html(tweet);

	//añadir tweet al local storage
	agregar_tweet_local_storage(tweet);
}

//Elimina tweet del DOM
function borrar_tweet(event){
	event.preventDefault();

	//usando delegation
	if(event.target.className === 'borrar-tweet'){
		//event.target.parentElement -> retorna el li
		//eliminando
		event.target.parentElement.remove();
		
		borrar_tweet_local_storage(event.target.parentElement.innerText);
	}

}

//mostrar datos del local storage en la lista (DOM)
function local_storage_listo(){
	let tweets = obtener_tweets_local_storage();

	//agregar cada tweet dentro del dom
	tweets.forEach(function(tweet){
		insertar_tweet_html(tweet);
	});

}

//función que agrega tweet al dom
function insertar_tweet_html(tweet){
	//crear botón de eliminar ese tweet
		const boton_borrar = document.createElement('a');
		boton_borrar.classList = 'borrar-tweet';
		boton_borrar.innerText = 'X';

		//crear elemento y añadir el contenido a la lista
		const li = document.createElement('li');
		li.innerText = tweet;

		//añadir el boton de borrar al tweet
		li.appendChild(boton_borrar);

		//añadir el tweet a la lista
		lista_tweets.appendChild(li);
}

//Agrega tweet al local storage
function agregar_tweet_local_storage(tweet){
	let tweets; //un arreglo para almacenar todos los tweets

	tweets = obtener_tweets_local_storage();

	//añadir el nuevo tweet al arreglo
	tweets.push(tweet);

	//convertir de string a arreglo para local storage
	//JSON.stringify -> convierte de array (json) a string
	localStorage.setItem('tweets', JSON.stringify(tweets));
}

//comprobar los elementos que hay en el local storage
//leer los tweets que hay en local storage
function obtener_tweets_local_storage(){
	let tweets;

	//Revisando los valores del local storage
	if(localStorage.getItem('tweets') === null){
		tweets = [];
	}else{
		//los tweets del local storage es un texto largo y lo convierto a un json (array)
		tweets = JSON.parse(localStorage.getItem('tweets') );
	}
	return tweets;
}

function borrar_tweet_local_storage(texto_tweet){
	//p(texto_tweet); // imprime "texto tweet"+X
	let tweets, tweet_a_borrar;

	//para eliminar la X del string
	tweet_a_borrar = texto_tweet.substring(0, texto_tweet.length - 1);
	//p(tweet_a_borrar);

	tweets = obtener_tweets_local_storage();
	//index sería el índice actual del array
	tweets.forEach(function(tweet_aux, index){

		if(tweet_a_borrar === tweet_aux){
			//eliminando el tweet del arreglo con el index
			tweets.splice(index, 1);
		}
	});
	
	//actualizar tweets local storage
	localStorage.setItem('tweets', JSON.stringify(tweets));
}

function p(text){
	console.log(text);
}