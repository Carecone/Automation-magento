const Pedido = require('../pageObjects/pedido')

beforeEach(() => {
    cy.visit('');
    cy.login();
})

describe('[Fluxo Feliz] - Tela de Pedidos', () => {
    it('Consultar detalhes do pedido após realizar uma compra.', () => {
        cy.adicionarItemCarrinho();
        cy.realizarPedido();
        Pedido.ClicarNumeroPedido();
    })
})
