//JAVA SCRIPT****
var texto = "pesquise sua letra!";

function preenche(){
	var valor = document.getElementById("busca").value;
	if(valor == ""){
		document.getElementById("busca").value=texto;
	}
}

function limpa(){
	var valor = document.getElementById("busca").value;
	if(valor == texto){
		document.getElementById("busca").value = '';
	}

}