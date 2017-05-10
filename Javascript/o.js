var form = document.forms[0];

var usuarios = [
{
	nome: 'TreinaWeb',
	login: 'treinaweb',
	senha: '123456;'
}
];

var validarUsuario = function(login, senha){
	for(indice in usuarios){
		var usuario = usuarios[indice];
		if (usuario.login === login && usuario.senha === senha){
			return true;
		}
	}
	return false;
}

form.addEventListener('submit', function(event){
	event.preventDefault();

	var login = document.getElementById('txtLogin').value;
	var senha = document.getElementById('txtPassword').value;

	if (validarUsuario(login, senha)){
		var message =document.getElementById('success');
		message.style.display = 'block';
    }else{
		var message = document.getElementById('error');
		message.style.display = 'block';
    }

});

