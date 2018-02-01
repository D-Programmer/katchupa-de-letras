//JAVA SCRIPT****
function TOPM(){
	1 - Musica1 - Artistadamusica1
	2 - Musica2 - Artistadamusica2
	3 - Musica3 - Artistadamusica3
	4 - Musica4 - Artistadamusica4
	5 - Musica5 - Artistadamusica5
}

function preencher(){
	document.getElementById("hh").innerHTML = 	1 - Musica1 - Artistadamusica1<br>	2 - Musica2 - Artistadamusica2<br>3 - Musica3 - Artistadamusica3<br> 4 - Musica4 - Artistadamusica4<br> 5 - Musica5 - Artistadamusica5;
}

function limpa(){
	var valor = document.getElementById("busca").value;
	if(valor == texto){
		document.getElementById("busca").value = '';
	}

}