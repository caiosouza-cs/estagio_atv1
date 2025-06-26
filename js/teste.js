const pesquisa = 'espinha';



fetch('./public/posts.json')
.then(r => r.json())
.then(card => {
  i = 0;
  while (i < card.length) {
  if (card[i].conteudo.includes(pesquisa)) {    //Aqui eu pesquiso se dentro do conteudo do card de indice i
    console.log(card[i].titulo)                 // tem a palavra da pesquisa. se tiver, ele joga no console.
    // console.log(card[i].conteudo)            // Eu posso puxar o card do html e comparar se ele é igual o do
  }                                             //json, se for, não adiciono na tela.
  i++;
  }
});


function comparaCard() {
  const card = document.querySelectorAll('.navegacao');
  console.log(card)
}

comparaCard();