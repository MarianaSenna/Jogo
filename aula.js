window.onload = function() {
	document.getElementById("botao").onclick = function () {
		//status=200, statusText=OK, responseText, responseXML
		var ajax = new XMLHttpRequest();
		var r = document.getElementById("resposta");
		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4) {
				//alert(ajax.responseText);
				r.appendChild(document.createTextNode(ajax.responseText))
			}
		}
		ajax.open("POST", "ajax/arquivo.txt");
		ajax.send(null);
		return false;
	}
}