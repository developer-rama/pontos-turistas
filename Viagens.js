function abrir() {
  menu.className = "active";
  menuBar.style.marginLeft = "20vw";
  main.style.marginLeft = "20vw";
  titulo.style.marginLeft = "20vw";
  menuBar.style.width = "60vw"; // posicinamento do menu deslizante
}

function fechar() {
  menu.className = "hidden";
  menuBar.style.marginLeft = "0";
  main.style.marginLeft = "0";
  titulo.style.marginLeft = "0";
  menuBar.style.width = "100vw"; // menu deslizante
}

var menu = document.querySelector('nav');
var menuBar = document.querySelector('#menu-bar');
var main = document.querySelector('main');
var titulo = document.querySelector('#menu-bar h1');
var btnAbrirMenu = document.querySelector('#btn');
var btnFecharMenu = document.querySelector('#close');

btnAbrirMenu.addEventListener('click', function(evt){
menu.className === 'hidden'? abrir() : fechar() });

var dados = []

class Usuario {
  constructor()
  {
    this.nome;
    this.nascimento;
    this.telefone;
    this.email;
    this.login;
    this.senha;
  }
  entrada()
  {
    this.nome = document.getElementById('nome').value;
    this.nascimento = document.getElementById('nascimento').value;
    this.telefone = document.getElementById('telefone').value;
    this.email = document.getElementById('email').value;
    this.login = document.getElementById('login_cadastro').value;
    this.senha = document.getElementById('senha_cadastro').value;
  }
}//fim classe Usuario

function cadastrar() {
  document.getElementById("principal").className = "invisivel";
  document.getElementById("comeco").className = "invisivel";
  document.getElementById("descrição").className = "invisivel";
  document.getElementById("cadastra").className = "visivel";
  console.getElementById
}

function salvar() {
  var user = new Usuario();
  user.entrada();
  dados.push(user);
  alert("Usuário cadastrado com sucesso!");
  limpar();
  document.getElementById("principal").className = "visivel";
  document.getElementById("cadastra").className = "invisivel";
}

function limpar() {
  document.getElementById('nome').value = "";
  document.getElementById('nascimento').value = "";
  document.getElementById('telefone').value = "";
  document.getElementById('email').value = "";
  document.getElementById('login_cadastro').value = "";
  document.getElementById('senha_cadastro').value = "";
  document.getElementById('login').value = "";
  document.getElementById('senha').value = "";
}

function logar() {
  var usuario = document.getElementById('login').value;
  var confirmar = document.getElementById('senha').value;

  for(var i=0;i<dados.length;i++)
  {
    if(dados[i].login == usuario && dados[i].senha == confirmar)
    {
      alert("Usúario cadastrado")
      document.getElementById("principal").className = "invisivel";
      document.getElementById("cadastra").className = "invisivel";
      document.getElementById("descrição").className = "invisivel";
      document.getElementById("comeco").className = "visivel";
      limpar()
    }
    else{
      alert("Usúario não cadastrado")
      limpar()
    }
  }
}

function inicio() {

  var usuario = document.getElementById('login').value;
  var confirmar = document.getElementById('senha').value;

  for(var i=0;i<dados.length;i++)
  {
    if(dados[i].login == usuario && dados[i].senha == confirmar)
    {
      document.getElementById("principal").className = "invisivel";
      document.getElementById("cadastra").className = "invisivel";
      document.getElementById("descrição").className = "invisivel";
      document.getElementById("comeco").className = "visivel";
    }
    else{
      alert("Usúario não cadastrado")
    }
  }
}

function sair() {
  document.getElementById("principal").className = "visivel";
  document.getElementById("cadastra").className = "invisivel";
  document.getElementById("descrição").className = "invisivel";
  document.getElementById("comeco").className = "invisivel";
}

function sob() {
  document.getElementById("principal").className = "invisivel";
  document.getElementById("cadastra").className = "invisivel";
  document.getElementById("comeco").className = "invisivel";
  document.getElementById("descrição").className = "visivel";
  /*document.getElementById("favorito").className = "visivel";*/
}

function mapaPosicaoLocal(){
  let mapa;
   /* "Pegar" a posição do usuário pelo seu navegador web
     O próprio navegador avisa e pede permissão ao usuário
     para que a sua localização atual seja utilizada */
  navigator.geolocation.getCurrentPosition(function(location) {
    /* Objeto com a latitute de longitude da localicação atual do usuário */
    let latitudeLongitudeAtual = {
      lat: location.coords.latitude,
      lng: location.coords.longitude
    };

    /* Elemento que representa o mapa no documento HTML */
    let divMapa = document.getElementById('mapa');

    /* Cria o mapa, tendo como base a localização do dispositivo do usuário*/
    mapa = new google.maps.Map(divMapa, {
      center: latitudeLongitudeAtual, // centro do mapa
      zoom: 16 // zoom do mapa
    });


    /* Criação de um novo marcador no mapa */
    let marker = new google.maps.Marker({
      position: latitudeLongitudeAtual, /* posição do marcador */
      map: mapa, // elemento do mapa
      title: 'Minha posição' // título (texto) que aparece sobre o marcador (quando o mouse fica sobre o elemento)
    });
  });   //posição do mapa
}/* Mapeamento com múltiplos marcadores */

function mapaMultiplosMarcadores(){
  let mapaMultiplosMarcadores;
  let divMapaMarcadores = document.getElementById('mapa-marcadores');
  let locais = [
    {
      nome: 'Parque do Ibirapuera',
      descricao: 'É o parque mais visitado do Brasil, e um dos pontos turísticos mais cobiçados do mundo.',
      latitudeLongitude: { lat: -23.584530, lng: -46.660964 }
    },
    {
      nome: 'Pão de Açúcar',
      descricao: 'Um dos pontos turísticos mais cobiçados no Rio de Janeiro é o Pão de Açúcar.',
      latitudeLongitude: { lat: -22.949159, lng: -43.154576 }
    },
    {
      nome: 'Porto de Galinhas',
      descricao: 'Uma das praias mais belas e espetaculares do Brasil e um belo ponto turístico para se visitar.',
      latitudeLongitude: { lat: -8.504072, lng: -35.000820 }
    },
    {
      nome: 'Praia do Rosa',
      descricao: 'Uma das praias mais belas e espetaculares do Brasil e um belo ponto turístico para se visitar.',
      latitudeLongitude: { lat: -28.121849, lng: -48.637445 }
    },
    {
      nome: 'Teatro Amazonas',
      descricao: 'O maior teatro do Brasil, é um espetáculo de cultura e beleza na sua forma mais original.',
      latitudeLongitude: { lat: -3.130202, lng: -60.023528 }
    },
    {
      nome: 'Palacio do Planelto',
      descricao: 'Palácio do Planalto é a sede do Poder Executivo Federal, local onde está o Gabinete Presidencial do Brasil.',
      latitudeLongitude: { lat: -15.790088, lng: -47.860043 }
    },

  ];

  mapaMultiplosMarcadores = new google.maps.Map(divMapaMarcadores, {
    center: locais[5].latitudeLongitude, // Ibirapuera como centro do Mapa
    zoom: 4 // zoom do mapa
  });

  /* Criar múltiplos marcadores */

  locais.forEach(function(local){
    /* Criação de um novo marcador no mapa */
    let marker = new google.maps.Marker({
      position: local.latitudeLongitude,
      map: mapaMultiplosMarcadores,
      title: local.nome
    });

    /* Conteúdo HTML que representa a janela de informações que aparece quando o marcador é selecionado. Essa estrutura HTML é padrão da API de mapas do Google */
    let conteudoJanelaInformacoes = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+ local.nome + '</h1>'+
            '<div id="bodyContent">'+
              '<p>' + local.descricao + '</p>'+
            '</div>'+
        '</div>';

     /* Instanciação de uma nova janela de informações */
    let infowindow = new google.maps.InfoWindow({
      content: conteudoJanelaInformacoes
    });

    /* Quando um marcador é 'clicado', a janela de informações é aberta sobre o mapa */
    marker.addListener('click', function() {
      infowindow.open(mapaMultiplosMarcadores, marker);
    });
  }); // mapa com vario locais
}
/* Função para inicialização do Mapa (manter o nome initMap) */
function initMap() {
  mapaPosicaoLocal();
  mapaMultiplosMarcadores(); // mostrar no mapa os locais
}