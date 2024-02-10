class telaInicial {

    btnCriarConta = "Create an Account"

    ClicarCriarConta() {
        cy.contains('a', this.btnCriarConta).click();
    }
}

module.exports = new telaInicial();