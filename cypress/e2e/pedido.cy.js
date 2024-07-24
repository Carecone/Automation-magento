const Pedido = require('../pageObjects/pedido')

beforeEach(() => {
    cy.visit('');
    cy.login();
    cy.adicionarItemCarrinho();
    cy.realizarPedido();
})

describe('[Fluxo Feliz] - Tela de Pedidos', () => {
    it('Consultar detalhes do pedido após realizar uma compra.', () => {
        Pedido.ClicarNumeroPedido();
    })
})
