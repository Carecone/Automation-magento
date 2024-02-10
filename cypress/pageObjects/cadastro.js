class telaCadastro {
    campoPrimeiroNome = "#firstname"
    campoSegundoNome = "#lastname"
    campoEmail = "#email_address"
    campoSenha = "#password"
    campoConfirmarSenha = "#password-confirmation"
    botaoConfirmarCadastro = 'button[title="Create an Account"]'
    mensagemCriarContaSucesso = '.message-success'

    PreencherPrimeiroNome(primeiroNome) {
        cy.get(this.campoPrimeiroNome).type(primeiroNome);
    }

    PreencherSegundoNome(segundoNome) {
        cy.get(this.campoSegundoNome).type(segundoNome);
    }

    PreencherEmail(email) {
        cy.get(this.campoEmail).type(email);
    }

    PreencherSenha(senha) {
        cy.get(this.campoSenha).type(senha);
    }

    RepetirSenha(senha) {
        cy.get(this.campoConfirmarSenha).type(senha);
    }

    CriarConta() {
        cy.get(this.botaoConfirmarCadastro).click()
        cy.get(this.mensagemCriarContaSucesso).should('be.visible');
    }
}

module.exports = new telaCadastro();