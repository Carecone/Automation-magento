const Checkout = require('../pageObjects/checkout')

beforeEach(() => {
    cy.visit('');
    cy.login();
    cy.adicionarItemCarrinho();
})

describe('[Fluxo Feliz] - Tela de finalização de compra', () => {
    it('Realizar a compra do itens de um carrinho.', () => {
        Checkout.AbrirCheckout();
        Checkout.SelecionarTipoEntrega();
        Checkout.Proximo();
        Checkout.FinalizarCompra();
    })
})
