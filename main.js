const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const btnPerguntar = document.querySelector('#btnPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  // verificar se a pergunta foi feita
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  // adicionando o atributo disabled no botão perguntar
  btnPerguntar.setAttribute('disabled', true)

  // criando div na parte de baixo do botão
  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar número aleatório
  const totalRepostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRepostas)
  console.log(respostas[numeroAleatorio])

  // mostrando na tela index as respostas
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // sumir a repostas depois de 3 segundos e remover o atributo do botão 'disabled'
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    btnPerguntar.removeAttribute('disabled')
  }, 3000)
}
