const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const carrossel = document.querySelector('#carrossel-contrainer');
const carrosselLista = document.querySelector('.carrossel');
const carrosselItems = document.querySelectorAll('.item');

let indice = 0;

// Aqui, calculamos quantos itens cabem no carrossel
const itensMostrados = Math.floor(carrossel.offsetWidth / carrosselItems[0].offsetWidth);
const totalItems = carrosselItems.length;

function atualizaCarrossel() {
  // Largura de um item, incluindo margens
  const larguraItem = carrosselItems[0].offsetWidth;

  // O deslocamento negativo é calculado multiplicando o índice pela largura do item
  const deslocamento = (indice * larguraItem * -1 )*6.55;
  console.log(deslocamento)

  // Aplica a transformação de deslocamento no carrossel
  carrosselLista.style.transform = `translateX(${deslocamento}px)`;

  // Desabilita o botão 'prev' se o índice for 0 (primeiro item)
  prev.disabled = indice === 0;

  // Desabilita o botão 'next' se o índice for igual ao número total de itens - itens visíveis
  next.disabled  = indice === 1;
}


// Atualiza o carrossel no início
atualizaCarrossel();

// Adiciona o evento de clique ao botão "Anterior"
prev.addEventListener('click', () => {
  if (indice > 0) { // Verifica se o índice não é o primeiro
    indice--; // Move para o item anterior
    atualizaCarrossel(); // Atualiza a posição do carrossel
  }
});

// Adiciona o evento de clique ao botão "Próximo"
next.addEventListener('click', () => {
  if (indice < totalItems - itensMostrados) { // Verifica se ainda há itens à frente
    indice++; // Move para o próximo item
    atualizaCarrossel(); // Atualiza a posição do carrossel
  }
});

let departamento = document.getElementById("departamento");
let close = document.getElementById("close");
let aside = document.querySelector("aside");

departamento.addEventListener('click', () => {
  if (aside.classList.contains('active')) {
    aside.classList.remove('active'); // Esconde o menu
  } else {
    aside.classList.add('active'); // Mostra o menu
  }
});

close.addEventListener('click', () => {
  if (aside.classList.contains('active')) {
    aside.classList.remove('active'); // Esconde o menu
  } else {
    aside.classList.add('active'); // Mostra o menu
  }
});



