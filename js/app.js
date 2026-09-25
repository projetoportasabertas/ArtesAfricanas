"use strict";

document.addEventListener("DOMContentLoaded", function () {
 const app = document.getElementById("app");
 const paginaAtual = document.body.dataset.pagina || "inicio";

 if (!app) {
 console.error("Elemento #app não foi encontrado.");
 return;
 }

 // Adicionamos imagens dinâmicas para o fundo de cada página
 const paginas = {
 inicio: {
 titulo: "A arte africana é a memória viva de um continente.",
 descricao:
 "Conheça as origens, as expressões culturais, os desafios históricos e a presença atual da arte africana no mundo.",
 botao: "Conhecer as origens",
 link: "origem.html",
 imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_African_mask_from_Medina_of_Essaouira.jpg?width=1200"
 },

 origem: {
 titulo: "As origens da arte africana",
 descricao:
 "A produção artística africana possui uma história antiga e está profundamente relacionada à vida social, espiritual e política de seus povos.",
 imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/African_mask_(3146098034).jpg?width=1200"
 },

 cultura: {
 titulo: "Cultura: arte que se vive",
 descricao:
 "Em muitos contextos tradicionais, a arte não está separada da vida. Ela participa das relações sociais, da espiritualidade e da educação.",
 imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Masques_africains.jpg?width=1200"
 },

 dificuldades: {
 titulo: "Desafios enfrentados pelos povos africanos",
 descricao:
 "A história da arte africana também está relacionada à violência, à exploração e à luta pela preservação da memória e da identidade.",
 imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/African_mask_with_straw_hair_(31800149417).jpg?width=1200"
 },

 atualmente: {
 titulo: "A arte africana atualmente",
 descricao:
 "A arte produzida por artistas africanos continua em transformação e está presente em diferentes espaços do continente e do mundo.",
 imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/African_Mask_1_3quarter.jpg?width=1200"
 }
 };

 function criarCabecalho() {
 const links = [
 ["Início", "index.html", "inicio"],
 ["Origem", "origem.html", "origem"],
 ["Cultura", "cultura.html", "cultura"],
 ["Dificuldades", "dificuldades.html", "dificuldades"],
 ["Atualmente", "atualmente.html", "atualmente"]
 ];

 const itensMenu = links
 .map(function (link) {
 const nome = link[0];
 const endereco = link[1];
 const pagina = link[2];

 const classeAtiva =
 paginaAtual === pagina ? "active text-warning" : "";

 return `
 <li class="nav-item">
 <a class="nav-link ${classeAtiva}" href="${endereco}">
 ${nome}
 </a>
 </li>
 `;
 })
 .join("");

 return `
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-warning sticky-top">
 <div class="container">
 <a class="navbar-brand fw-bold" href="index.html">
 <span class="text-warning">◆</span> Arte Africana
 </a>

 <button
 class="navbar-toggler"
 type="button"
 data-bs-toggle="collapse"
 data-bs-target="#menuPrincipal"
 aria-controls="menuPrincipal"
 aria-expanded="false"
 aria-label="Abrir menu"
 >
 <span class="navbar-toggler-icon"></span>
 </button>

 <div class="collapse navbar-collapse" id="menuPrincipal">
 <ul class="navbar-nav ms-auto">
 ${itensMenu}
 </ul>
 </div>
 </div>
 </nav>
 `;
 }

 // Cabeçalho (Hero) atualizado para carregar a imagem de fundo conforme a página atual
 function criarHero() {
 const pagina = paginas[paginaAtual] || paginas.inicio;

 const botao = pagina.botao
 ? `
 <a href="${pagina.link}" class="btn btn-warning btn-lg mt-3 position-relative z-1">
 ${pagina.botao}
 </a>
 `
 : "";

 return `
 <header class="bg-dark text-white py-5 position-relative" style="min-height: 400px; display: flex; align-items: center;">
 <div class="position-absolute top-0 start-0 w-100 h-100" style="background: url('${pagina.imagem}') center/cover no-repeat; opacity: 0.3;"></div>
 <div class="container py-5 position-relative z-1">
 <span class="badge text-bg-warning text-dark mb-3">
 História, cultura e identidade
 </span>

 <h1 class="display-3 fw-bold col-lg-9">
 ${pagina.titulo}
 </h1>

 <p class="lead col-lg-8 text-light">
 ${pagina.descricao}
 </p>

 ${botao}
 </div>
 </header>
 `;
 }

 function criarCard(icone, titulo, texto) {
 return `
 <div class="col-md-6 col-lg-4">
 <div class="card h-100 shadow-sm border-0 border-top border-4 border-danger">
 <div class="card-body">
 <div class="display-5 mb-3">${icone}</div>
 <h3 class="h4 card-title">${titulo}</h3>
 <p class="card-text text-secondary">${texto}</p>
 </div>
 </div>
 </div>
 `;
 }

 function criarRodape() {
 return `
 <footer class="bg-dark text-light text-center py-5 mt-5">
 <div class="container">
 <h2 class="h4 text-warning">Arte Africana</h2>

 <p class="mb-2">
 Um espaço educativo sobre a história, a cultura e a diversidade
 artística do continente africano.
 </p>

 <small class="text-secondary">
 © 2026 - Projeto educativo sobre arte africana
 </small>
 </div>
 </footer>
 `;
 }

 function paginaInicio() {
 return `
 ${criarHero()}

 <section class="py-5">
 <div class="container">
 <div class="row align-items-center mb-5">
 <div class="col-lg-6">
 <h2 class="display-6 fw-bold">
 Uma arte diversa e cheia de significados
 </h2>
 <p class="lead text-secondary">
 A África é formada por muitos povos, línguas, tradições e histórias.
 Por isso, não existe apenas uma arte africana, mas inúmeras formas
 de expressão.
 </p>
 </div>
 <!-- Imagem Inserida -->
 <div class="col-lg-6 mt-4 mt-lg-0">
 <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Masques_blancs_Bwa-Musée_barrois_(1).jpg?width=600" class="img-fluid rounded shadow border border-3 border-warning" alt="Máscaras Bwa">
 </div>
 </div>

 <div class="row g-4">
 ${criarCard(
 "🎭",
 "Identidade",
 "Máscaras, esculturas e pinturas podem representar ancestrais, divindades, grupos sociais e momentos importantes da vida."
 )}

 ${criarCard(
 "🥁",
 "Comunidade",
 "A arte está ligada à música, à dança, às cerimônias e à transmissão de conhecimentos entre gerações."
 )}

 ${criarCard(
 "🎨",
 "Criatividade",
 "Artistas africanos utilizam madeira, tecidos, metais, argila, fibras, pigmentos naturais e tecnologias digitais."
 )}
 </div>
 </div>
 </section>

 <section class="bg-warning-subtle py-5">
 <div class="container">
 <h2 class="display-6 fw-bold mb-4">
 O que você encontrará neste site
 </h2>

 <div class="row g-4">
 <div class="col-md-4">
 <div class="p-4 bg-white rounded shadow-sm h-100">
 <span class="display-6 text-danger">01</span>
 <h3 class="h4 mt-3">Origem</h3>
 <p class="text-secondary">
 A presença da arte nas sociedades africanas desde tempos antigos.
 </p>
 </div>
 </div>

 <div class="col-md-4">
 <div class="p-4 bg-white rounded shadow-sm h-100">
 <span class="display-6 text-danger">02</span>
 <h3 class="h4 mt-3">Cultura</h3>
 <p class="text-secondary">
 As principais formas de expressão artística e seus significados.
 </p>
 </div>
 </div>

 <div class="col-md-4">
 <div class="p-4 bg-white rounded shadow-sm h-100">
 <span class="display-6 text-danger">03</span>
 <h3 class="h4 mt-3">Atualidade</h3>
 <p class="text-secondary">
 A presença da arte africana nos museus, galerias e espaços urbanos.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 `;
 }

 function paginaOrigem() {
 return `
 ${criarHero()}

 <section class="py-5">
 <div class="container">
 <div class="row align-items-center mb-5">
 <div class="col-lg-6">
 <h2 class="display-6 fw-bold">Uma história milenar</h2>
 <p class="lead text-secondary">
 A produção artística africana possui uma longa história e está
 relacionada à vida social, espiritual, política e econômica de seus povos.
 </p>
 </div>
 <!-- Imagem Inserida -->
 <div class="col-lg-6 mt-4 mt-lg-0">
 <img src="https://commons.wikimedia.org/wiki/Special:FilePath/African_mask.jpg?width=600" class="img-fluid rounded shadow border border-3 border-danger" alt="Arte em escultura">
 </div>
 </div>

 <div class="row mt-4">
 <div class="col-lg-8">
 <p>
 Desde a Antiguidade, comunidades africanas produziram pinturas
 rupestres, objetos de cerâmica, esculturas, joias, tecidos e
 ferramentas decoradas.
 </p>
 <p>
 Essas obras não eram apenas objetos decorativos. Elas estavam
 relacionadas à religião, à vida cotidiana, à proteção espiritual,
 à autoridade e à memória coletiva.
 </p>
 <p>
 Em muitas sociedades, o conhecimento artístico era transmitido
 de geração em geração. Artesãos aprendiam com familiares e mestres,
 desenvolvendo técnicas para trabalhar madeira, pedra, argila,
 fibras, metais e pigmentos naturais.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section class="bg-dark text-light py-5">
 <div class="container">
 <h2 class="display-6 fw-bold text-warning mb-5">
 Principais períodos históricos
 </h2>

 <div class="row g-4">
 <div class="col-md-4">
 <div class="card h-100">
 <div class="card-body">
 <span class="badge text-bg-warning">
 Tempos antigos
 </span>
 <h3 class="h4 mt-3 text-dark">Pinturas rupestres</h3>
 <p class="text-dark">
 Representações de animais, pessoas, cenas de caça e símbolos
 mostram a importância das imagens para diferentes comunidades.
 </p>
 </div>
 </div>
 </div>

 <div class="col-md-4">
 <div class="card h-100">
 <div class="card-body">
 <span class="badge text-bg-warning">
 Reinos africanos
 </span>
 <h3 class="h4 mt-3 text-dark">Arte ligada ao poder</h3>
 <p class="text-dark">
 Metais, esculturas, tecidos e joias também eram utilizados
 para demonstrar autoridade, riqueza e pertencimento.
 </p>
 </div>
 </div>
 </div>

 <div class="col-md-4">
 <div class="card h-100">
 <div class="card-body">
 <span class="badge text-bg-warning">
 Período moderno
 </span>
 <h3 class="h4 mt-3 text-dark">Transformações culturais</h3>
 <p class="text-dark">
 O contato entre povos africanos e outras regiões trouxe mudanças
 nos materiais, estilos e formas de circulação das obras.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 `;
 }

 function paginaCultura() {
 return `
 ${criarHero()}

 <section class="py-5">
 <div class="container">
 <div class="row align-items-center mb-5">
 <div class="col-lg-6">
 <h2 class="display-6 fw-bold">
 Formas de expressão cultural
 </h2>
 <p class="lead text-secondary mb-4">
 A arte participa das relações sociais, da espiritualidade,
 das cerimônias e da educação.
 </p>
 <div class="accordion" id="acordeaoCultura">
 <div class="accordion-item">
 <h2 class="accordion-header">
 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#esculturas" aria-expanded="true" aria-controls="esculturas">
 Esculturas e máscaras
 </button>
 </h2>
 <div id="esculturas" class="accordion-collapse collapse show" data-bs-parent="#acordeaoCultura">
 <div class="accordion-body">
 Máscaras e esculturas podem participar de cerimônias, festas, rituais de passagem e homenagens aos ancestrais.
 </div>
 </div>
 </div>
 <div class="accordion-item">
 <h2 class="accordion-header">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tecidos" aria-expanded="false" aria-controls="tecidos">
 Tecidos e padrões
 </button>
 </h2>
 <div id="tecidos" class="accordion-collapse collapse" data-bs-parent="#acordeaoCultura">
 <div class="accordion-body">
 Tecidos africanos apresentam cores, desenhos e técnicas que podem comunicar identidade, posição social e pertencimento.
 </div>
 </div>
 </div>
 <div class="accordion-item">
 <h2 class="accordion-header">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#musica" aria-expanded="false" aria-controls="musica">
 Música e dança
 </button>
 </h2>
 <div id="musica" class="accordion-collapse collapse" data-bs-parent="#acordeaoCultura">
 <div class="accordion-body">
 Música e dança fazem parte de celebrações, cerimônias, festas e formas de comunicação.
 </div>
 </div>
 </div>
 <div class="accordion-item">
 <h2 class="accordion-header">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#arquitetura" aria-expanded="false" aria-controls="arquitetura">
 Arquitetura
 </button>
 </h2>
 <div id="arquitetura" class="accordion-collapse collapse" data-bs-parent="#acordeaoCultura">
 <div class="accordion-body">
 Construções tradicionais revelam conhecimentos sobre clima, materiais locais, organização comunitária e espiritualidade.
 </div>
 </div>
 </div>
 </div>
 </div>
 <!-- Imagem Inserida -->
 <div class="col-lg-6 mt-4 mt-lg-0">
 <img src="https://commons.wikimedia.org/wiki/Special:FilePath/An_African_ritual_mask,_The_Museum_of_African_Art_in_Belgrade1.jpg?width=600" class="img-fluid rounded shadow border border-3 border-dark" alt="Máscara Ritual Africana">
 </div>
 </div>
 </div>
 </section>

 <section class="bg-warning-subtle py-5">
 <div class="container">
 <h2 class="display-6 fw-bold mb-4">
 Características importantes
 </h2>

 <div class="row g-4">
 ${criarCard(
 "🌍",
 "Diversidade",
 "Cada região possui estilos, materiais, símbolos e tradições próprios."
 )}

 ${criarCard(
 "👥",
 "Coletividade",
 "Muitas obras são criadas para uma comunidade, e não apenas para expressar a individualidade do artista."
 )}

 ${criarCard(
 "🕯️",
 "Espiritualidade",
 "O mundo dos ancestrais e das forças espirituais aparece em vários objetos e cerimônias."
 )}
 </div>
 </div>
 </section>
 `;
 }

 function paginaDificuldades() {
 return `
 ${criarHero()}

 <section class="py-5">
 <div class="container">
 <div class="row align-items-center mb-5">
 <div class="col-lg-6">
 <h2 class="display-6 fw-bold">
 Colonialismo e exploração
 </h2>
 <p class="lead text-secondary mb-5">
 Durante o colonialismo, muitos povos tiveram seus territórios,
 formas de governo e tradições profundamente afetados.
 </p>
 </div>
 <!-- Imagem Inserida -->
 <div class="col-lg-6 mt-4 mt-lg-0">
 <img src="https://commons.wikimedia.org/wiki/Special:FilePath/African_masks,_International_Slavery_Museum,_Liverpool_(1).JPG?width=600" class="img-fluid rounded shadow border border-3 border-danger" alt="Exibição de máscaras no Museu da Escravidão">
 </div>
 </div>

 <div class="row g-4">
 ${criarCard(
 "⚠️",
 "Perda de territórios",
 "A ocupação colonial alterou a organização de muitas comunidades e limitou o acesso a territórios importantes para sua vida cultural."
 )}

 ${criarCard(
 "📦",
 "Retirada de objetos",
 "Diversos objetos culturais foram retirados de seus locais de origem e levados para coleções particulares e instituições estrangeiras."
 )}

 ${criarCard(
 "🗣️",
 "Desvalorização cultural",
 "Línguas, religiões, técnicas e tradições foram muitas vezes classificadas de forma preconceituosa."
 )}
 </div>
 </div>
 </section>

 <section class="bg-dark text-light py-5">
 <div class="container">
 <h2 class="display-6 fw-bold text-warning">
 Resistência e preservação
 </h2>

 <div class="col-lg-8 mt-4">
 <p>
 Mesmo diante dessas dificuldades, povos africanos continuaram
 preservando seus conhecimentos. A transmissão oral, as cerimônias,
 o ensino familiar e o trabalho dos artesãos ajudaram a manter vivas
 muitas tradições.
 </p>

 <p>
 Atualmente, artistas, pesquisadores e comunidades também discutem
 a devolução de objetos retirados durante o período colonial e
 reivindicam maior controle sobre a forma como suas culturas são apresentadas.
 </p>
 </div>
 </div>
 </section>
 `;
 }

 function paginaAtualmente() {
 return `
 ${criarHero()}

 <section class="py-5">
 <div class="container">
 <div class="row align-items-center mb-5">
 <div class="col-lg-6">
 <h2 class="display-6 fw-bold">
 Presença no mundo contemporâneo
 </h2>
 <p class="lead text-secondary mb-5">
 Artistas africanos combinam tradições, experiências urbanas,
 questões políticas e novas tecnologias.
 </p>
 </div>
 <!-- Imagem Inserida -->
 <div class="col-lg-6 mt-4 mt-lg-0">
 <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Bwindi_Light_Masks,_Richi_Ferrero_(5260749085).jpg?width=600" class="img-fluid rounded shadow border border-3 border-warning" alt="Arte e tecnologia">
 </div>
 </div>

 <div class="row g-4">
 ${criarCard(
 "🖼️",
 "Museus e galerias",
 "Obras africanas e de artistas da diáspora são exibidas em museus, galerias, exposições e centros culturais."
 )}

 ${criarCard(
 "📱",
 "Arte digital",
 "A internet ampliou a divulgação de ilustrações, fotografias, vídeos, animações e performances."
 )}

 ${criarCard(
 "🏙️",
 "Arte urbana",
 "Murais, grafites e intervenções ocupam espaços públicos e discutem identidade, desigualdade, política e memória."
 )}

 ${criarCard(
 "🧵",
 "Moda e design",
 "Padrões, tecidos e técnicas artesanais aparecem em roupas, acessórios, móveis e projetos contemporâneos."
 )}
 </div>
 </div>
 </section>

 <section class="bg-warning-subtle py-5">
 <div class="container">
 <h2 class="display-6 fw-bold">
 Tradição e inovação
 </h2>

 <div class="col-lg-8 mt-4">
 <p>
 A arte africana contemporânea não deve ser vista apenas como
 uma continuação do passado. Ela também é formada por experiências
 atuais, migrações, cidades, conflitos, mudanças sociais e novas
 maneiras de criar.
 </p>

 <p>
 Ao mesmo tempo, muitos artistas utilizam símbolos, técnicas e
 histórias tradicionais para reafirmar suas identidades e questionar
 representações estereotipadas sobre o continente africano.
 </p>
 </div>
 </div>
 </section>

 <section class="py-5">
 <div class="container">
 <blockquote class="blockquote border-start border-danger border-4 ps-4">
 <p>
 A arte africana contemporânea conecta memória, identidade e transformação.
 </p>
 </blockquote>

 <p class="col-lg-8">
 Conhecer essa produção exige reconhecer a diversidade do continente
 e evitar generalizações. Cada artista, povo e região possui trajetórias próprias.
 </p>
 </div>
 </section>
 `;
 }

 function obterConteudo() {
 switch (paginaAtual) {
 case "origem":
 return paginaOrigem();

 case "cultura":
 return paginaCultura();

 case "dificuldades":
 return paginaDificuldades();

 case "atualmente":
 return paginaAtualmente();

 case "inicio":
 default:
 return paginaInicio();
 }
 }

 app.innerHTML = `
 ${criarCabecalho()}
 <main>
 ${obterConteudo()}
 </main>
 ${criarRodape()}
 `;

 if (typeof bootstrap === "undefined") {
 console.error(
 "Bootstrap não foi carregado. Verifique o link do JavaScript do Bootstrap."
 );
 }
});