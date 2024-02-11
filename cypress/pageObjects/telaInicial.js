class telaInicial {

    btnCriarConta = 'Create an Account'
    btnRealizarLogin = 'Sign In'

    ClicarCriarConta() {
        cy.contains('a', this.btnCriarConta).click();
    }

    ClicarRealizarLogin() {
        cy.contains('a', this.btnRealizarLogin).click();
    }
}

module.exports = new telaInicial();