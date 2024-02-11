class telaInicial {
    btnCriarConta = 'Create an Account'
    btnRealizarLogin = 'Sign In'
    campoPesquisa = "#search"
    botaoCampoPesquisa = "button[title='Search']"
    produtoPesquisa = "div.swatch-opt-1580"
    produtoTelaInicial = 'div > a[href="https://magento2-demo.magebit.com/radiant-tee.html"]'
    tituloPaginaPesquisa= '.page-title'

    ClicarCriarConta() {
        cy.contains('a', this.btnCriarConta).click();
    }

    ClicarRealizarLogin() {
        cy.contains('a', this.btnRealizarLogin).click();
    }

    PreencherCampoPesquisa(produto) {
        cy.get(this.campoPesquisa).type(produto);
    }

    PesquisarProduto() {
        cy.get(this.campoPesquisa).type('{enter}')
    }

    SelecionarProduto() {
        cy.get(this.produtoTelaInicial).click();
    }
    
}

module.exports = new telaInicial();