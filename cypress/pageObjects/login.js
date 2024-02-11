class telaLogin {
    campoEmail = "#email"
    campoSenha = "#pass"
    botaoRealizarLogin = '.action.login.primary'
    mensagemValidarLogin = 'li.greet.welcome'

    PreencherEmail(email) {
        cy.get(this.campoEmail).type(email);
    }

    PreencherSenha(senha) {
        cy.get(this.campoSenha).type(senha);
    }

    RealizarLogin() {
        cy.get(this.botaoRealizarLogin).click()
        cy.get(this.mensagemValidarLogin).should('be.visible');
    }
}

module.exports = new telaLogin();