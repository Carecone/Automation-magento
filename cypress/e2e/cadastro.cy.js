const dataUtils = require('../support/dataUtils')
const TelaInicial = require('../pageObjects/telaInicial')
const Cadastro = require('../pageObjects/cadastro')

beforeEach(() => {
    cy.visit('');
})

describe('[Fluxo Feliz] - Cadastro de usuário', () => {
    it('Cadastro de usuário', () => {
        cy.fixture('usuarios').then((usuario) => {
            TelaInicial.ClicarCriarConta();
            Cadastro.PreencherPrimeiroNome(usuario.nome);
            Cadastro.PreencherSegundoNome(usuario.segundoNome);
            Cadastro.PreencherEmail(dataUtils.gerarEmail() + usuario.email)
            Cadastro.PreencherSenha(usuario.senha)
            Cadastro.RepetirSenha(usuario.senha)
            Cadastro.CriarConta();
        } )
    })
})
