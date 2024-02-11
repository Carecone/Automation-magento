const TelaInicial = require('../pageObjects/telaInicial')
const Login = require('../pageObjects/login')

Cypress.Commands.add('login', () => {
    cy.fixture('usuarios').then((usuario) => {
        TelaInicial.ClicarRealizarLogin();
        Login.PreencherEmail(usuario[1].email)
        Login.PreencherSenha(usuario[1].senha)
        Login.RealizarLogin();
    })
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