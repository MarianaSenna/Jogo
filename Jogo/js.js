var jogador1 = 1,
    jogador2 = 0,
    final = null;

function chkJogo (id){

    if(final){
        return alert('Jogo finalizado.');  
    }

   //VALIDAR
   if(document.getElementById(id).src != 'file:///C:/www/Jogo/img/branco.png'){
      return alert('Espaço preenchido');  
   }


   //JOGAR
   if(jogador1 > jogador2){
      var img = document.getElementById(id).src="img/x.png"
      jogador2++;
   }else if(jogador1 == jogador2){
      var img = document.getElementById(id).src="img/o.png"
      jogador1++; 
   }
    
   if( (document.getElementById('cel1').src == document.getElementById('cel2').src && 
       document.getElementById('cel1').src == document.getElementById('cel3').src &&
       document.getElementById('cel3').src != 'file:///C:/www/Jogo/img/branco.png') ||
       (document.getElementById('cel4').src == document.getElementById('cel5').src &&
       document.getElementById('cel4').src == document.getElementById('cel6').src &&
       document.getElementById('cel6').src != 'file:///C:/www/Jogo/img/branco.png') ||
       (document.getElementById('cel7').src == document.getElementById('cel8').src &&
       document.getElementById('cel7').src == document.getElementById('cel9').src &&
       document.getElementById('cel9').src != 'file:///C:/www/Jogo/img/branco.png')){
            document.getElementById('win').innerHTML  = "Você Ganhou!"
            final = 1;
   }else if(document.getElementById('cel1').src == document.getElementById('cel4').src && 
            document.getElementById('cel1').src == document.getElementById('cel7').src &&
            document.getElementById('cel7').src != 'file:///C:/www/Jogo/img/branco.png' ||
            document.getElementById('cel2').src == document.getElementById('cel5').src &&
            document.getElementById('cel2').src == document.getElementById('cel8').src &&
            document.getElementById('cel8').src != 'file:///C:/www/Jogo/img/branco.png' ||
            document.getElementById('cel3').src == document.getElementById('cel6').src &&
            document.getElementById('cel3').src == document.getElementById('cel9').src &&
            document.getElementById('cel9').src != 'file:///C:/www/Jogo/img/branco.png'){
            document.getElementById('win').innerHTML  = document.getElementById('win').value ="Você Ganhou!"
            final = 1;
   }else if(document.getElementById('cel1').src == document.getElementById('cel5').src && 
            document.getElementById('cel1').src == document.getElementById('cel9').src &&
            document.getElementById('cel9').src != 'file:///C:/www/Jogo/img/branco.png' ||
            document.getElementById('cel3').src == document.getElementById('cel5').src &&
            document.getElementById('cel3').src == document.getElementById('cel7').src &&
            document.getElementById('cel7').src != 'file:///C:/www/Jogo/img/branco.png'){
             document.getElementById('win').innerHTML  = document.getElementById('win').value ="Você Ganhou!"
             final = 1;
    }
    
}

function testinho(){
document.getElementById('txtTeste').value = document.getElementById('nome1').innerHTML
 document.getElementById('nome2').innerHTML  = document.getElementById('txtTeste2').value 

}


