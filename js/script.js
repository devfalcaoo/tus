// ======================================================
// SCRIPT.JS
// Tenda de Umbanda Sagrada Caboclo Samambaia e Cigano Pablo
// ======================================================


// ======================================================
// 1. FECHAR MENU MOBILE AO CLICAR EM UM LINK
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o menu de navegação
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Seleciona todos os links do menu
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Verifica se o menu existe
    if (navbarCollapse) {

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                // Verifica se o menu está aberto
                if (navbarCollapse.classList.contains("show")) {

                    // Usa o Bootstrap para fechar o menu
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }

            });

        });

    }

});


// ======================================================
// 2. EFEITO DA NAVBAR AO ROLAR A PÁGINA
// ======================================================

window.addEventListener("scroll", function () {

    // Seleciona a navbar
    const navbar = document.getElementById("navbar");

    // Verifica se a navbar existe
    if (!navbar) return;

    // Adiciona a classe "scrolled" depois de rolar 50px
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ======================================================
// 3. BOTÃO "VOLTAR AO TOPO"
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o botão
    const backToTop = document.getElementById("backToTop");

    // Verifica se o botão existe
    if (!backToTop) return;


    // Mostra ou esconde o botão conforme a rolagem
    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    // Ao clicar, volta suavemente para o topo
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

// ======================================================
// 5. FILTRO DA GALERIA
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // Seleciona os botões de filtro
    const filtros = document.querySelectorAll(".gallery-filter");

    // Seleciona todas as imagens/itens da galeria
    const itensGaleria = document.querySelectorAll(".gallery-item");


    // Percorre cada botão
    filtros.forEach(function (filtro) {

        filtro.addEventListener("click", function () {

            // Obtém o filtro escolhido
            const filtroSelecionado = this.getAttribute("data-filter");


            // Remove a classe ativa de todos os botões
            filtros.forEach(function (botao) {
                botao.classList.remove("active");
            });


            // Adiciona a classe ativa ao botão clicado
            this.classList.add("active");


            // Percorre os itens da galeria
            itensGaleria.forEach(function (item) {

                // Obtém a categoria do item
                const categoria = item.getAttribute("data-category");


                // Se for "todos", mostra tudo
                if (filtroSelecionado === "todos") {

                    item.style.display = "block";

                }

                // Se a categoria corresponder ao filtro
                else if (categoria === filtroSelecionado) {

                    item.style.display = "block";

                }

                // Caso contrário, esconde
                else {

                    item.style.display = "none";

                }

            });

        });

    });

});


// ======================================================
// 6. ROLAGEM SUAVE PARA OS LINKS INTERNOS
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // Seleciona links que começam com #
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    linksInternos.forEach(function (link) {

        link.addEventListener("click", function (evento) {

            const destino = this.getAttribute("href");

            // Ignora links que sejam apenas "#"
            if (destino === "#") return;

            const elemento = document.querySelector(destino);

            // Verifica se o destino existe
            if (elemento) {

                evento.preventDefault();

                // Calcula a posição considerando a navbar fixa
                const alturaNavbar = document.querySelector(".navbar")?.offsetHeight || 0;

                const posicao =
                    elemento.getBoundingClientRect().top +
                    window.pageYOffset -
                    alturaNavbar;

                // Faz a rolagem suave
                window.scrollTo({
                    top: posicao,
                    behavior: "smooth"
                });

            }

        });

    });

});


// ======================================================
// 7. ANIMAÇÃO SIMPLES DOS ELEMENTOS AO ENTRAREM NA TELA
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // Elementos que podem receber animação
    const elementos = document.querySelectorAll(
        ".value-card, .umbanda-card, .gira-list-item, .contact-card"
    );


    // Verifica se o navegador suporta IntersectionObserver
    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entradas, observer) {

                entradas.forEach(function (entrada) {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("visible");

                        // Para de observar depois que apareceu
                        observer.unobserve(entrada.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        // Começa a observar cada elemento
        elementos.forEach(function (elemento) {

            observer.observe(elemento);

        });

    }

});


// ======================================================
// FIM DO SCRIPT
// ======================================================