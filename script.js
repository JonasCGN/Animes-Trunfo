var carta = {
  nome: "Issei",
  imagem:
    "https://i.ibb.co/6RMxkKp/issei-hyoudou-by-tetsuyakyoko-daj0sh3-pre.jpg",
  atributos: {
    Ataque: 10,
    Defesa: 30,
    Magia: 10
  }
};

var carta2 = {
  nome: "Saitama",
  imagem: "https://i.ibb.co/yRvSBF5/images-7.jpg",
  atributos: {
    Ataque: 100,
    Defesa: 100,
    Magia: 0
  }
};

var carta3 = {
  nome: "Ainz",
  imagem: "https://images6.alphacoders.com/952/thumb-350-952646.png",
  atributos: {
    Ataque: 9,
    Defesa: 20,
    Magia: 90
  }
};

var cartas = [carta, carta2, carta3];
var cartaJogador;
var cartaMaquina;

function sortearCarta() {
  var cartaJogadorSorteado = parseInt(Math.random() * 3);
  cartaJogador = cartas[cartaJogadorSorteado];
  var cartaMaquinaSorteado = parseInt(Math.random() * 3);
  //variáveis para escolher a sua carta

  while (cartaJogadorSorteado == cartaMaquinaSorteado) {
    cartaMaquinaSorteado = parseInt(Math.random() * 3);
  }
  cartaMaquina = cartas[cartaMaquinaSorteado];
  //while para nao deixar que as cartas sejamn iguais
  imagemJogador();
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  //definir os botoes para que sejam habilitados ou desabilitados
  //chamada de funcoes para exibir qual atributo voce vai escolher
  var resultadoHTML = document.getElementById("resultado-final");
  resultadoHTML.innerHTML = "";
  var cartaMostrada = document.getElementById("carta-maquina");

  var estilo =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  cartaMostrada.style.backgroundImage = `url(${""})`;
  cartaMostrada.innerHTML = estilo;
}

function atributoSelecionado() {
  var atributoSelecionad = document.getElementsByName("atributo");

  for (var i = 0; i < atributoSelecionad.length; i++) {
    if (atributoSelecionad[i].checked == true) {
      return atributoSelecionad[i].value;
    }
  }
}

function jogar() {
  var atributoSel = atributoSelecionado();
  var resultado = document.getElementById("resultado-final");
  var valorJogador = cartaJogador.atributos[atributoSel];
  var valorMaquina = cartaMaquina.atributos[atributoSel];
  //variáveis dos atributos dos personagens
  if (valorJogador > valorMaquina) {
    resultado.innerHTML = "Você Venceu!";

    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
    imagemMaquina();
  } else if (valorJogador < valorMaquina) {
    resultado.innerHTML = "Você perdeu";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
    imagemMaquina();
  } else if (valorJogador == undefined) {
    document.getElementById("btnJogar").disabled = false;
    resultado.innerHTML = "Selecione um Atributo";
  } else {
    resultado.innerHTML = "Empate";
    //resultado para saber se ganhou, perdeu ou empatou
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
    imagemMaquina();
    //desabilitar botões
  }
}
function imagemJogador() {
  var cartaMostrada = document.getElementById("carta-jogador");
  cartaMostrada.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var estilo =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var html = "<div id='opcoes' class='carta-status'>";
  var opcoesAtributos = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesAtributos +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ":" +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nomeJogador = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;

  cartaMostrada.innerHTML =
    estilo + nomeJogador + html + opcoesAtributos + "</div>";
}

function imagemMaquina() {
  var cartaMostrada = document.getElementById("carta-maquina");
  cartaMostrada.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var estilo =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var html = "<div id='opcoes' class='carta-status'>";
  var opcoesAtributos = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesAtributos +=
      "<p type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ":" +
      cartaMaquina.atributos[atributo];
  }
  var nomeMaquina = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;

  cartaMostrada.innerHTML =
    estilo + nomeMaquina + html + opcoesAtributos + "</div>";
}