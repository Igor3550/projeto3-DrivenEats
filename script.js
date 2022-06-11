let comidaSelecionada;
let bebidaSelecionada;
let sobremesaSelecionada;

function selecionarComida(elemento){
  const selecionado = document.querySelector('.comida .selecionado');
  const checkIcon = elemento.querySelector('ion-icon');
  
  if(selecionado !== null){
    const checkIcon = selecionado.querySelector('ion-icon');
    selecionado.classList.remove('selecionado');
    checkIcon.classList.add('esconder');
    checkIcon.classList.remove('mostrar');
  }

  elemento.classList.add('selecionado');
  checkIcon.classList.add('mostrar');
  checkIcon.classList.remove('esconder');
  comidaSelecionada = elemento;

  verificarFinalizacao();
}

function selecionarBebida(elemento){
  const selecionado = document.querySelector('.bebida .selecionado');
  const checkIcon = elemento.querySelector('ion-icon');
  
  if(selecionado !== null){
    const checkIcon = selecionado.querySelector('ion-icon');
    selecionado.classList.remove('selecionado');
    checkIcon.classList.add('esconder');
    checkIcon.classList.remove('mostrar');
  }

  elemento.classList.add('selecionado');
  checkIcon.classList.add('mostrar');
  checkIcon.classList.remove('esconder');
  bebidaSelecionada = elemento;

  verificarFinalizacao();
}

function selecionarSobremesa(elemento){
  const selecionado = document.querySelector('.sobremesa .selecionado');
  const checkIcon = elemento.querySelector('ion-icon');
  
  if(selecionado !== null){
    const checkIcon = selecionado.querySelector('ion-icon');
    selecionado.classList.remove('selecionado');
    checkIcon.classList.add('esconder');
    checkIcon.classList.remove('mostrar');
  }

  elemento.classList.add('selecionado');
  checkIcon.classList.add('mostrar');
  checkIcon.classList.remove('esconder');
  sobremesaSelecionada = elemento;

  verificarFinalizacao();
}

function verificarFinalizacao(){
  if(comidaSelecionada && bebidaSelecionada && sobremesaSelecionada){
    const botaoCinza = document.querySelector('button.cinza');
    const botaoFinalizar = document.querySelector('button.verde');

    botaoCinza.classList.add('esconder');
    botaoFinalizar.classList.add('mostrar');
    botaoFinalizar.classList.remove('esconder');
  }
}