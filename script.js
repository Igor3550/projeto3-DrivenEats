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

function confirmarPedido(){
  const confirmarArea = document.querySelector('.area-confirmar-pedido');

  const comida = comidaSelecionada.querySelector('h1').innerHTML;
  const bebida = bebidaSelecionada.querySelector('h1').innerHTML;
  const sobremesa = sobremesaSelecionada.querySelector('h1').innerHTML;
  const precoComida = comidaSelecionada.querySelector('p').innerHTML;
  const precoBebida = bebidaSelecionada.querySelector('p').innerHTML;
  const precoSobremesa = sobremesaSelecionada.querySelector('p').innerHTML;

  const displayTotal = document.querySelector('.total');
  //soma os preços tirando o "R$" q é uma string para n dar o erro de NaN
  const total = (parseFloat(precoComida.slice(3)) + parseFloat(precoBebida.slice(3)) + parseFloat(precoSobremesa.slice(3)));

  confirmarArea.querySelector('.items div:first-child').innerHTML = `<span>${comida}</span><span>${precoComida}</span>`;
  confirmarArea.querySelector('.items div:nth-child(2)').innerHTML = `<span>${bebida}</span><span>${precoBebida}</span>`;
  confirmarArea.querySelector('.items div:nth-child(3)').innerHTML = `<span>${sobremesa}</span><span>${precoSobremesa}</span>`;

  displayTotal.innerHTML = `R$ ${total.toFixed(2)}`;

  confirmarArea.classList.toggle('esconder');
}