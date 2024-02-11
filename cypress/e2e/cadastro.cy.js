const dataUtils = require('../support/dataUtils')
const TelaInicial = require('../pageObjects/telaInicial')
const Cadastro = require('../pageObjects/cadastro')

beforeEach(() => {
    cy.visit('');
})

describe('[Fluxo Feliz] - Tela de Cadastro de usuário', () => {
    it('Realizar cadastro de um novo usuário corretamente.', () => {
        cy.fixture('usuarios').then((usuario) => {
            TelaInicial.ClicarCriarConta();
            Cadastro.PreencherPrimeiroNome(usuario[0].nome);
            Cadastro.PreencherSegundoNome(usuario[0].segundoNome);
            Cadastro.PreencherEmail(dataUtils.gerarEmail() + usuario[0].email)
            Cadastro.PreencherSenha(usuario[0].senha)
            Cadastro.RepetirSenha(usuario[0].senha)
            Cadastro.CriarConta();
        } )
    })
})
