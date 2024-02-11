class telaCheckout {
    iconeCarrinho = ".showcart"
    botaoCheckout = "#top-cart-btn-checkout"
    botaoTipoEntrega= "#checkout-shipping-method-load > table > tbody > tr:nth-child(1)"
    botaoProximo = "#shipping-method-buttons-container > div > button"
    botaoConfirmarCompra = 'button[title="Place Order"]'
    mensagemSucessoCompra = 'span[data-ui-id="page-title-wrapper"]'

    AbrirCheckout() {
        cy.get(this.iconeCarrinho, { timeout: 5000 }).click();
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

    ValidarPedidoRealizado(mensagem) {
        cy.get(this.mensagemSucessoCompra).should('have.text', mensagem)
    }
}
module.exports = new telaCheckout();