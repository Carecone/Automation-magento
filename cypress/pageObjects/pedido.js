class telaPedido {
    numeroPedido = ".order-number > strong"

    ClicarNumeroPedido() {
        cy.get(this.numeroPedido).click();
    }
}
module.exports = new telaPedido();