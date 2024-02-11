const TelaInicial = require('../pageObjects/telaInicial')
const Carrinho = require('../pageObjects/carrinho')

beforeEach(() => {
    cy.visit('');
})

describe('[Fluxo Feliz] - Carrinho', () => {
    it('Realizar busca de produto e adicionar o item no carrinho', () => {
        TelaInicial.PreencherCampoPesquisa('Gwyn Endurance Tee');
        TelaInicial.PesquisarProduto();
        Carrinho.SelecionarCorRoupa();
        Carrinho.SelecionarTamanhoRoupa();
        Carrinho.AdicionarItemCarrinho();
        Carrinho.ValidarProdutoAdicionadoCarrinho('Gwyn Endurance Tee');
    })

    it('Adicionar item ao carrinho pela tela do produto', () => {
        TelaInicial.SelecionarProduto();
        Carrinho.SelecionarCorRoupaCarrinho();
        Carrinho.SelecionarTamanhoRoupaCarrinho();
        Carrinho.AdicionarItemTelaCarrinho();
        Carrinho.ValidarProdutoAdicionadoCarrinho('Radiant Tee');
    })
})
