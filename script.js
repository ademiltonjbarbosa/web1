// "Base de dados"
const filmes = [{
    id: 1,
    titulo: "Wicked: Parte 2",
    genero: "Fantasia, Musical",
    lancamento: "20 de Novembro de 2025",
    capa: "https://parade.com/.image/w_640,q_auto:good,c_limit/MjEwMzk5Mjk5OTc1MTI5MDY1/Wicked%2520Cynthia%2520Erivo.jpg",
    sinopse: "O filme dá continuidade à história de Elphaba (Cynthia Erivo) e Glinda (Ariana Grande). Em um salto temporal, Elphaba é conhecida como a Bruxa Má do Oeste e está foragida, vista como inimiga de Oz. Glinda, por sua vez, se torna a representante do Mágico. As amigas, que seguiram caminhos opostos, precisarão se unir uma última vez. ",
    posters: [
        "img-capas/wicked/0cef4ca9204280d2fed772cd357f4157.webp",
        "img-capas/wicked/official-character-posters-for-wicked-movie-v0-ih4uo5mv8tmd1.webp",
        "img-capas/wicked/Pôster_de_Wicked_Parte_2.png",
        "img-capas/wicked/wicked-r-blogroll-1731970531678_h1ac-1024x576.jpg"
    ],
    trailer: "https://youtu.be/p90PAUN793U?si=ic9F2qXQS9o6qnD0"
},
{
    id: 2,
    titulo: "Um Filme Minecraft",
    genero: "Aventura",
    lancamento: "04 de Abril de 2025",
    capa: "https://imgs.search.brave.com/0AvTXiFw5WVz3njPf1EfooDziPpe4EboH1yxfJqVK4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6RmpNek5q/T1RrdE5EQmxOeTAw/WVdaaExXRXhZVGN0/WkRjeE5EQTRPV1Zo/T1RKalhrRXlYa0Zx/Y0djQC5qcGc",
    sinopse: "A aventura acompanha um grupo de desajustados que precisa salvar o mundo superior de uma ameaça. A trama envolverá um mundo misterioso de blocos, hordas de piglins e os protagonistas Steve e Dawn. O filme é uma adaptação do popular jogo de videogame.  ",
    posters: [
        "img-capas/minecraft/6a574e9c-040b-4612-ae44-785318a27193.webp",
        "img-capas/minecraft/174370609167eed7ebe4ad1_1743706091_3x2_md.jpg",
        "img-capas/minecraft/IMG_4726-745x1024.webp"

    ],
    trailer: "https://youtu.be/3IVPHxs4NoM?si=xUm0en7HRDvEXPNy"
},
{
    id: 3,
    titulo: "Jurassic World: Recomeço",
    genero: "Ação",
    lancamento: "03 de Julho de 2025",
    capa: "https://imgs.search.brave.com/VaEIBwn1Jia9GeJPDaDgusIV25vY56PkM1aA3dImOcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16WmlOVFpo/WTJJdFlUWTFZeTAw/TXpBMkxXRmhZMkl0/T1RkbFlXTTBOV05q/WmpFeVhrRXlYa0Zx/Y0djQC5qcGc",
    sinopse: "Cinco anos após os eventos de Domínio, o planeta se tornou inóspito para os dinossauros. Uma equipe de operações especiais, liderada por Zora Bennett (Scarlett Johansson), é enviada a uma ilha para coletar DNA de três dinossauros, na esperança de encontrar a chave para uma nova medicina para a humanidade.  ",
    posters: [
        "img-capas/jurassic/21e49640-55d1-11f0-b5c5-012c5796682d.jpg.webp",
        "img-capas/jurassic/8486b883df6753a29278acb5bcdb6cd38dedd6d6e506a498b4092f1612fe3e25._SX1080_FMjpg_.jpg",
        "img-capas/jurassic/20250630-jurassic-world-recomeco-papo-de-cinema-cartaz.webp"

    ],
    trailer: "https://youtu.be/jan5CFWs9ic?si=K8RSqf_MhCrnJUH8"
},
{
    id: 4,
    titulo: "Missão: Impossível – O Acerto Final",
    genero: "Ação",
    lancamento: "22 de Maio de 2025",
    capa: "https://imgs.search.brave.com/mRpI9ObP4hAbqsIe2yGyYjlDVU11Mbx5YgtFS0btlO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2R1/YmxhZ2VtL2ltYWdl/cy9iL2IxL01pc3Ml/QzMlQTNvX0ltcG9z/cyVDMyVBRHZlbF8t/X09fQWNlcnRvX0Zp/bmFsLmpwZy9yZXZp/c2lvbi9sYXRlc3Qv/c2NhbGUtdG8td2lk/dGgtZG93bi8yNjg_/Y2I9MjAyNTA1MTgx/NDIwMTQmcGF0aC1w/cmVmaXg9cHQtYnI",
    sinopse: "Ethan Hunt (Tom Cruise) e sua equipe embarcam em sua missão mais perigosa: localizar e proteger uma nova e aterrorizante arma que ameaça toda a humanidade antes que ela caia em mãos erradas. A narrativa busca celebrar o legado da franquia. ",
    posters: [
        "img-capas/missao/a73359e56bda3b66f78e6f6bff08caaf.webp",
        "img-capas/missao/dccb03d3-382a-47d1-805c-34c0a3735a2b.webp",
        "img-capas/missao/missao_impossivel_acerto_de_contas_parte_um_final_explicado_1__782s1g.jpg"
    ],
    trailer: "https://youtu.be/uo1GEL7pVRk?si=Jwh_Gv0Xepsu26mF"
},
{
    id: 5,
    titulo: "Lilo & Stitch",
    genero: "Aventura, Infantil",
    lancamento: "22 de Maio de 2025",
    capa: "https://imgs.search.brave.com/CtEybNjrWFa5fwF2cs1qA9DIIB7iWudCMww4lYLthgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMWMy/OGJlYzQtMWU3Zi00/YzIyLTk1YjYtNTJj/NWM2ODZlNzM2LjI5/NDFhNWViMmNkMmI2/MDU2YzViMWIwNzk1/MTg4NmI4LmpwZWc_/b2RuSGVpZ2h0PTU3/NiZvZG5XaWR0aD01/NzYmb2RuQmc9RkZG/RkZG",
    sinopse: "Uma adaptação live-action do clássico animado da Disney. A trama segue a história da solitária garota havaiana Lilo e do adorável, mas destrutivo, alienígena Stitch. A nova versão recria a aventura, a diversão e a amizade, destacando a importância da ohana. ",
    posters: [
        "img-capas/lilo/91bcbe9c43eb7e9ee7c810b45db25f4c.jpg",
        "img-capas/lilo/4379582804d2a0f50f73342f8cd8bbaf.jpg",
        "img-capas/lilo/lilo-e-stitch-live-action-capa.jpg"
    ],
    trailer: "https://youtu.be/oLnS1Ij9-Kk?si=-FE1vyu3TLZNKuh1"
},
{
    id: 6,
    titulo: "Invocação do Mal 4: O Ultimo Ritual",
    genero: "Terror, Suspense",
    lancamento: "04 de Setembro de 2025",
    capa: "https://br.web.img3.acsta.net/c_310_420/img/28/7d/287dbd3c843903f3519952c0af589baf.jpg",
    sinopse: "O filme marca o encerramento da saga de terror e a despedida do casal protagonista, Ed e Lorraine Warren, interpretados por Patrick Wilson e Vera Farmiga. Embora a sinopse oficial não tenha sido liberada, o enredo envolve o casal em seu último caso paranormal. O filme é dirigido por Michael Chaves, que também dirigiu o filme anterior da franquia.",
    posters: [
        "img-capas/invocacao/287dbd3c843903f3519952c0af589baf.webp",
        "img-capas/invocacao/879cc40731f1ff7140181e31879d44f5.webp",
        "img-capas/invocacao/b58b5188-6fd6-4e05-8693-64c2bc7f1336.webp"
    ],
    trailer: "https://youtu.be/n0sq-r0mBXQ?si=nqCA1lp9nRqJm_Fs"
},
{
    id: 7,
    titulo: "O Concorrente",
    genero: "Ação",
    lancamento: "13 de Novembro de 2025",
    capa: "https://br.web.img3.acsta.net/c_310_420/img/14/99/14997c8f086d94089dd089059a20e744.jpg",
    sinopse: "Em uma versão distópica dos Estados Unidos em 2025, a economia colapsa e a violência global aumenta. O herói improvável Ben Richards (Glen Powell) se voluntaria para o violento game show The Running Man, onde deve escapar de assassinos profissionais por 30 dias para ganhar um prêmio em dinheiro e salvar sua família da pobreza. A trama explora temas de controle estatal, manipulação da mídia e a luta desesperada por sobrevivência",
    posters: [
        "img-capas/concorrente/383b8f3523587b1d0afb4bec49744833.webp",
        "img-capas/concorrente/14997c8f086d94089dd089059a20e744.jpg",
        "img-capas/concorrente/glen-powell-on-the-set-of-edgar-wrights-the-running-man-v0-1mmbj64yswyd1.jpg"
    ],
    trailer: "https://youtu.be/ZeHsq2aKvRw?si=c5W-XhripfFTfeSw"
},
{
    id: 8,
    titulo: "Karate Kid: Lendas",
    genero: "Artes Marciais",
    lancamento: "08 de Maio de 2025",
    capa: "https://imgs.search.brave.com/GqyMVxUIAujwCWJ5gy0S5Lf0K6rcap-yKCHhoFuKfBI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5tWXlNVFk1/WmpJdE1XTXlPUzAw/TXpkakxUZzBPRFF0/TVRRMk1UWTFaV1Ex/TnpNeVhrRXlYa0Zx/Y0djQC5qcGc",
    sinopse: "O filme reúne Ralph Macchio e Jackie Chan. A história se passa na costa leste dos EUA, onde o jovem chinês Li Fong (Ben Wang) se muda para Nova York após uma tragédia familiar. Ele luta para se adaptar e, ao ajudar um novo amigo, entra em uma competição de karatê. Com a ajuda do Sr. Han e de Daniel LaRusso, ele aprende a combinar estilos em um confronto épico.",
    posters: [
        "img-capas/karate/6a9edfd55ce28ca6df541b983c2d9d25.jpg",
        "img-capas/karate/image-w1280.webp",
        "img-capas/karate/karate2-1600x1066.webp"
    ],
    trailer: "https://youtu.be/LhRXf-yEQqA?si=ecv8xRdu_mQxAlus"
},
{
    id: 9,
    titulo: "Zootopia 2",
    capa: "https://br.web.img3.acsta.net/c_310_420/img/72/80/72808e91859a731a7f787ffe1b0d0131.jpg",
    genero: "Aventura, Desenho Animado",
    lancamento: "26 de Novembro de 2025",
    sinopse: "Os detetives e agora parceiros inseparáveis, a coelha Judy Hopps e a raposa Nick Wilde, enfrentam o desafio mais perigoso de suas carreiras: solucionar o caso de uma misteriosa serpente chamada Gary que está causando pânico em Zootopia. Eles precisam se infiltrar em novas e inesperadas partes da cidade, testando sua parceria como nunca antes.",
    posters: [
        "img-capas/zootopia2/2757d4a7-4243-45e8-8ff0-2848aa7ebe46.webp",
        "img-capas/zootopia2/c4bff45cee411e2f395c0d8e3ce93bcc.jpg",
        "img-capas/zootopia2/image002_d99d6b28.jpeg"
    ],
    trailer: "https://youtu.be/_UmBPK3D6X4?si=Vqzi3nepGtrd3lDs"
},
{
    id: 10,
    titulo: "Avatar: Fogo e Cinzas",
    genero: "Ficção Cientifica",
    lancamento: "18 de Dezembro de 2025",
    capa: "https://imgs.search.brave.com/U7FPzTFY-rGRNy-sa6Wd3VHMUjnFV2QugcceZHOmqQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kaXNu/ZXlwbHVzYnJhc2ls/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wOC9B/dmF0YXItRm9nby1l/LUNpbnphcy1EaXNu/ZXktUGx1cy5qcGc",
    sinopse: "O terceiro filme da saga retoma a história da família Sully após os eventos de O Caminho da Água. Eles encontram uma nova tribo Na'vi, o Povo das Cinzas, descrito como um grupo vulcânico e agressivo que servirá como antagonista. A trama aborda temas como ódio, violência, luto e trauma. O filme terá como narrador o personagem Lo'ak, filho de Jake Sully.",
    posters: [
        "img-capas/avatar/Avatar-Fogo-e-Cinzas-1.webp",
        "img-capas/avatar/AvatarFireAndAsh_Still15.webp",
        "img-capas/avatar/d0a178dfb53053c71b2e157e313386d1.jpg"
    ],
    trailer: "https://youtu.be/nb_fFj_0rq8?si=mNqOmMXoniY8ihU8"
},
{
    id: 11,
    titulo: "Superman",
    genero: "Ação, Aventura",
    lancamento: "11 de Julho de 2025",
    capa: "https://imgs.search.brave.com/X0T2NCfpXuvzZVVkuJ2cz7TsWmopZWiMR9Tj9jGGOE8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXJk/YW9jdWJvLmNvbS5i/ci9jZG4vc2hvcC9m/aWxlcy9wZHZfMDFf/YmVjMTU0M2YtYjAz/NS00ZWM1LWFkNzUt/MGZhNDg4ZDkwNzAx/LmpwZz92PTE3NTYy/MTI3OTQmd2lkdGg9/NjAw",
    sinopse: "O filme reinventa o herói para uma nova era do universo DC. A trama acompanha Clark Kent/Superman (David Corenswet) em sua jornada para conciliar suas duas personas: sua herança alienígena e sua vida humana. O herói é movido pela compaixão e por uma crença inata na bondade da humanidade. ",
    posters: [
        "img-capas/superman/Superman_29.webp",
        "img-capas/superman/Superman-2025.webp",
        "img-capas/superman/superman.avif",
        "img-capas/superman/yRBc6WY3r1Fz5Cjd6DhSvzqunED-1024x576-1.jpg"
    ],
    trailer: "https://youtu.be/6HsfXtgcAE4?si=UsaKSJ57i_LZYpN9"
}
];



function carregarFilmes() {
    // Seleciona o container onde os filmes vão aparecer
    const container = document.getElementById("lista-filmes");

    // Limpa o container antes de inserir (caso já tenha algo)
    container.innerHTML = "";

    // Percorre todos os filmes do array
    filmes.forEach(filme => {
        // 4. Cria um elemento <div> para o card
        const card = document.createElement("div");
        card.classList.add("card-filmes"); // adiciona a classe CSS

        //  Define o conteúdo do card usando template string
        card.innerHTML = `
                <div class="capa-filme" style="background-image: url(${filme.capa});"></div>
                <div class="sinopse-filme">
                    <h1>${filme.titulo}</h1>
                    <p>${filme.sinopse}</p>
                    <button onclick="adicionarFavorito('${filme.titulo}')">⭐ Favoritar</button>
                    <button onclick="window.location.href='detalhes.html?id=${filme.id}'">Detalhes</button>
                </div>
                `;

        // Adiciona o card dentro do container
        container.appendChild(card);
    });


}

// Salvar nos favoritos
function adicionarFavorito(titulo) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (!favoritos.includes(titulo)) {
        favoritos.push(titulo);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        alert(`${titulo} adicionado aos favoritos!`);
    } else {
        alert(`${titulo} já está nos favoritos!`);
    }
}

function carregarFavoritos() {
    const container = document.getElementById("lista-favoritos");
    container.innerHTML = "";

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
        container.innerHTML =
            "<p style='text-align:center; font-size:1.5em;'>Nenhum favorito adicionado ainda!</p>";
        return;
    }

    favoritos.forEach(titulo => {
        const filme = filmes.find(f => f.titulo === titulo);
        if (filme) {
            const card = document.createElement("div");
            card.classList.add("card-filmes");
            card.innerHTML = `
                        <div class="capa-filme" style="background-image: url(${filme.capa});"></div>
                        <div class="sinopse-filme">
                            <h1>${filme.titulo}</h1>
                            <p>${filme.sinopse}</p>
                            <button onclick="removerFavorito('${filme.titulo}')">❌ Remover</button>
                        </div>
                    `;
            container.appendChild(card);
        }
    });
}

function removerFavorito(titulo) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(f => f !== titulo);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    carregarFavoritos(); // atualiza a página
}

function sortearFilme() {
    const container = document.getElementById("sorteio-filme");
    container.innerHTML = ""; // limpa o container

    const indice = Math.floor(Math.random() * filmes.length);
    const filme = filmes[indice];

    const card = document.createElement("div");
    card.classList.add("card-filmes");
    card.innerHTML = `
                <div class="capa-filme" style="background-image: url(${filme.capa});"></div>
                <div class="sinopse-filme">
                    <h1>${filme.titulo}</h1>
                    <p>${filme.sinopse}</p>
                    <button onclick="adicionarFavorito('${filme.titulo}')">⭐ Favoritar</button>
                </div>
            `;
    container.appendChild(card);
}

function youtubeEmbed(link) {
    // Exemplo de link normal: https://www.youtube.com/watch?v=yXPWsdT43YE
    // Exemplo de link curto: https://youtu.be/yXPWsdT43YE
    let videoId = "";

    if (link.includes("youtube.com/watch")) {
        const url = new URL(link);
        videoId = url.searchParams.get("v"); // pega o ?v=...
    } else if (link.includes("youtu.be/")) {
        videoId = link.split("/").pop();
    }

    if (!videoId) return ""; // caso o link esteja inválido
    return `https://www.youtube.com/embed/${videoId}`;
}



window.addEventListener("load", () => {
    // Se estiver na Home
    if (document.getElementById("lista-filmes")) {
        carregarFilmes();
    }

    // Se estiver na página de Favoritos
    if (document.getElementById("lista-favoritos")) {
        carregarFavoritos();
    }

    // Se estiver na página de Sorteador
    const btnSorteio = document.getElementById("btn-sorteio");
    if (btnSorteio) {
        btnSorteio.addEventListener("click", sortearFilme);
    }
});

