function selecionarComida(elemento){
  const selecionado = document.querySelector('.comida .selecionado')
  if(selecionado !== null){
    selecionado.classList.remove('selecionado');
  }
  elemento.classList.add('selecionado')
}

function selecionarBebida(elemento){
  const selecionado = document.querySelector('.bebida .selecionado')
  if(selecionado !== null){
    selecionado.classList.remove('selecionado');
  }
  elemento.classList.add('selecionado')
}

function selecionarSobremesa(elemento){
  const selecionado = document.querySelector('.sobremesa .selecionado')
  if(selecionado !== null){
    selecionado.classList.remove('selecionado');
  }
  elemento.classList.add('selecionado')
}