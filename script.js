document.addEventListener('DOMContentLoaded', () => {
    const barraBusca = document.getElementById('barra-busca');
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    const cards = document.querySelectorAll('.app-card');

    // Estado inicial: 'todos'
    let filtroAtual = 'todos';
    let termoBusca = '';

    /**
     * Função principal para aplicar a filtragem e a busca.
     * Ela decide quais cartões mostrar com base nos estados atuais.
     */
    function aplicarFiltroEBusca() {
        cards.forEach(card => {
            const categoria = card.getAttribute('data-categoria');
            const titulo = card.querySelector('h2').textContent.toLowerCase();
            const descricao = card.querySelector('p').textContent.toLowerCase();
            
            // 1. Verifica se corresponde à categoria
            const correspondeFiltro = filtroAtual === 'todos' || categoria === filtroAtual;

            // 2. Verifica se corresponde ao termo de busca
            const correspondeBusca = titulo.includes(termoBusca) || descricao.includes(termoBusca);
            
            // O cartão só é exibido se AMBAS as condições forem verdadeiras
            if (correspondeFiltro && correspondeBusca) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // --- 1. Lógica da Busca (Input) ---
    barraBusca.addEventListener('keyup', () => {
        termoBusca = barraBusca.value.toLowerCase().trim();
        aplicarFiltroEBusca();
    });

    // --- 2. Lógica da Filtragem (Botões) ---
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            filtroAtual = botao.getAttribute('data-filter');

            // Atualiza o estado visual do botão
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            // Aplica o filtro
            aplicarFiltroEBusca();
        });
    });

    // Roda a função assim que a página carrega para mostrar todos os apps
    aplicarFiltroEBusca(); 
});