const TelaInicial = require('../pageObjects/telaInicial')
const Login = require('../pageObjects/login')

beforeEach(() => {
    cy.visit('');
})

describe('[Fluxo Feliz] - Tela de login', () => {
    it('Realizar Login utilizando um usuário cadastrado.', () => {
        cy.fixture('usuarios').then((usuario) => {
            TelaInicial.ClicarRealizarLogin();
            Login.PreencherEmail(usuario[1].email)
            Login.PreencherSenha(usuario[1].senha)
            Login.RealizarLogin();
        } )
    })
})
