class telaLogin {
    campoEmail = "#email"
    campoSenha = "#pass"
    botaoRealizarLogin = '.action.login.primary'
    mensagemValidarLogin = '#message-error'

    PreencherEmail(email) {
        cy.get(this.campoEmail).type(email);
    }

    PreencherSenha(senha) {
        cy.get(this.campoSenha).type(senha);
        cy.wait(1000)
    }

    RealizarLogin() {
        cy.get(this.botaoRealizarLogin).click()
    }
    
    ValidarLogin() {
        cy.get(this.mensagemValidarLogin).should('not.exist');
    }
}
module.exports = new telaLogin();