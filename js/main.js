
//Função que toca o som
function tocaSom(seletorAudio) {

  const elemento = document.querySelector(seletorAudio);

  //tratamento de erro ao receber o elemento.
  if (elemento != null && elemento.localName == 'audio' ) {
    elemento.play();
    
  }else{
    alert('Elemnto não encontrado ou seletor inválido !')    
  }
  
};


//constante que recebe a lista de teclas atraves da classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');



//loop que percorre a lista de teclas na sequencia chama a função tocaSom
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  //templete string
  const idAudio = `#som_${instrumento}`

  //console.log(idAudio)
  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  
  //quando aperta o teclado
  tecla.onkeydown = function(evento){
    
    console.log(evento.code);
    
    //adiciona a cor na telca usando a pseudo classe ativa
    if (evento.code == 'Space' || evento.code == 'Enter')  {
      tecla.classList.add('ativa');
    };

  };

  //quando desaperta o teclado
  tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
  };

};

