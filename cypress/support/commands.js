const TelaInicial = require('../pageObjects/telaInicial')
const Login = require('../pageObjects/login')
const Carrinho = require('../pageObjects/carrinho')
const Checkout = require('../pageObjects/checkout')

Cypress.Commands.add('login', () => {
    cy.fixture('usuarios').then((usuario) => {
        TelaInicial.ClicarRealizarLogin();
        Login.PreencherEmail(usuario[1].email)
        Login.PreencherSenha(usuario[1].senha)
        Login.RealizarLogin();
    })
})

Cypress.Commands.add('adicionarItemCarrinho', () => {
    TelaInicial.PreencherCampoPesquisa('Gwyn Endurance Tee');
    TelaInicial.PesquisarProduto();
    Carrinho.SelecionarCorRoupa();
    Carrinho.SelecionarTamanhoRoupa();
    Carrinho.AdicionarItemCarrinho();
})

Cypress.Commands.add('realizarPedido', () => {
    Checkout.AbrirCheckout();
    Checkout.SelecionarTipoEntrega();
    Checkout.Proximo();
    Checkout.FinalizarCompra();
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })