function valida_titol(){
	var titol = document.getElementById("titol").value; //recuperem el valor del camp del formulari
	
	if (titol.length >49) { //si es més gran de 49 caracters..
		document.getElementById("message_titol").innerHTML = "Titol no valid. No pot tenir més de 49 caràcters"; //mostrem un missatge d'error
	}	
	else if (titol=="") { //si està buit
		document.getElementById("message_titol").innerHTML = "Has d'introduir un titol"; //mostrem un missatge d'error
		}
				
	else{ //si no està buit
		document.getElementById("message_titol").innerHTML = ""; //eliminem el missatge d'error i retornem true
		return true;
	}
		}


function valida_director(){
	var director = document.getElementById("director").value; //recuperem el valor del camp del formulari
	if (director.length >29) { //si es més gran de 29 caracters..
		document.getElementById("message_director").innerHTML =  "Nom no valid. No pot tenir més de 28 caràcters"; //mostrem un missatge d'error
	}	
	else if (director=="") { //si està buit
		document.getElementById("message_director").innerHTML = "Has d'introduir un nom"; //mostrem un missatge d'error
		}
	else{ //si no està buit
		document.getElementById("message_director").innerHTML = ""; //eliminem el missatge d'error i retornem true
		return true;
	}
}

function valida_pais(){
	var pais = document.getElementById("pais").value; //recuperem el valor del camp del formulari
	if (pais.length >20) { //si es més gran de 20 caracters..
		document.getElementById("message_pais").innerHTML =  "Pais no valid. No pot tenir més de 19 caràcters"; //mostrem un missatge d'error
	}	
	else if (pais=="") { //si està buit
		document.getElementById("message_pais").innerHTML = "Has d'introduir un nom"; //mostrem un missatge d'error
		}
	 else{ //si no està buit
		document.getElementById("message_pais").innerHTML = ""; //eliminem el missatge d'error i retornem true
		return true;
	}
}

function valida_any(){
	var any = document.getElementById("any").value; //recuperem el valor del camp del formulari
		if (any=="") { //si està buit
		document.getElementById("message_any").innerHTML = "Has d'introduir un any entre 1800 i 2999"; //mostrem un missatge d'error
		} else{		
		if (any > 2999 || any < 1800) { ////valor del camp del formulari ha d'estar entre 1800 i 2999
		document.getElementById("message_any").innerHTML = "Has d'introduir un any entre 1800 i 2999";
		}else{	//si no està buit i es correcte
		document.getElementById("message_any").innerHTML = ""; 
		return true; //eliminem el missatge d'error i retornem true
		}
	}
}

function valida_puntuacio(){
	var puntuacio = document.getElementById("puntuacio").value; //recuperem el valor del camp del formulari
		if (puntuacio=="") { //si està buit
		document.getElementById("message_puntuacio").innerHTML = "Has d'introduir un numero 0 i 10"; //mostrem un missatge d'error
		} else{		
		if (puntuacio > 10 || puntuacio < 0) { ////valor del camp del formulari ha d'estar entre 1800 i 2999
		document.getElementById("message_puntuacio").innerHTML = "Has d'introduir un numero 0 i 10";
		}else{	//si no està buit i es correcte
		document.getElementById("message_puntuacio").innerHTML = ""; 
		return true; //eliminem el missatge d'error i retornem true
		}
	}
}
function valida_form(){ //aquesta funció s'executa al enviar el formulari.
	if (valida_titol()&& valida_director()&& valida_pais()&& valida_any()&& valida_puntuacio()&& valida_animacio()&& valida_catala()){ //si totes les funcions retornen true, el formulari s'envia.
		alert("validat!");
		return true;
	}else{ //si no, error i no s'envia
	alert("hi ha errors");
		valida_titol();
		valida_director();
		valida_pais();
		valida_any();
		valida_puntuacio();
		valida_animacio();
		valida_catala();
		return false;
	}

}