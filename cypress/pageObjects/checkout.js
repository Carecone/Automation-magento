class telaCheckout {
    iconeCarrinho = ".showcart"
    botaoCheckout = "#top-cart-btn-checkout"
    botaoTipoEntrega= "#checkout-shipping-method-load > table > tbody > tr:nth-child(1)"
    botaoProximo = "#shipping-method-buttons-container > div > button"
    botaoConfirmarCompra = 'button[title="Place Order"]'

    AbrirCheckout() {
        cy.get(this.iconeCarrinho).click();
        cy.get(this.botaoCheckout).click();
    }

    SelecionarTipoEntrega() {
        cy.get(this.botaoTipoEntrega, { timeout: 10000 }).click();
    }

    Proximo() {
        cy.get(this.botaoProximo).click();
    } 

    FinalizarCompra() {
        cy.get(this.botaoConfirmarCompra, { timeout: 10000 }).click();
    }    
}
module.exports = new telaCheckout();