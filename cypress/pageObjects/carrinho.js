class telaCarrinho {
    tamanhoRoupa = "div.swatch-opt-1580 > div > div > #option-label-size-157-item-174"
    corRoupa = "div.swatch-opt-1580 > div:nth-child(2) > div > #option-label-color-93-item-60"
    tamanhoRoupaCarinho = "#option-label-size-157-item-174"
    corRoupaCarinho = "#option-label-color-93-item-50"
    botaoAdicionarItemCarrinho = "form[data-product-sku='WS01'] > button"
    botaoAdicionarItemTelaCarrinho = "#product-addtocart-button"
    mensagemAdicionarProdutoCarrinhoSucesso = ".message-success"
    produtoPesquisa = "div.swatch-opt-1580"

    SelecionarTamanhoRoupa() {
        cy.get(this.tamanhoRoupa).click();
    }

    SelecionarCorRoupa() {
        cy.get(this.corRoupa, { timeout: 5000 }).click();
    }

    SelecionarTamanhoRoupaCarrinho() {
        cy.get(this.tamanhoRoupaCarinho).click();
    }

    SelecionarCorRoupaCarrinho() {
        cy.get(this.corRoupaCarinho).click();
    }

    AdicionarItemCarrinho() {
        cy.get(this.produtoPesquisa).realHover('mouse')
        cy.get(this.botaoAdicionarItemCarrinho).click();
        cy.wait(3000)
    }

    AdicionarItemTelaCarrinho() {
        cy.get(this.botaoAdicionarItemTelaCarrinho).click();
    }

    ValidarProdutoAdicionadoCarrinho(produto) {
        cy.get(this.mensagemAdicionarProdutoCarrinhoSucesso, { timeout: 5000 }).should('have.text','\n\nYou added ' +produto+ ' to your shopping cart.\n')
    }
}
module.exports = new telaCarrinho();