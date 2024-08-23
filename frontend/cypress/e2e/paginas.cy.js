describe('Testando múltiplas páginas', () => {
  it('Deve conseguir acessar a página Início', () => {
    cy.visit('/')
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('app-home').find('a').eq(0).click()
    cy.getByData('titulo-transacao').contains('Nova Transação')
    })
  it('Deve conseguir acessar a página de cartões', () => {
  cy.visit('/')
  cy.getByData('botao-login').click();
  cy.getByData('email-input').type('neilton@alura.com');
  cy.getByData('senha-input').type('123456');
  cy.getByData('botao-enviar').click();
  cy.getByData('app-home').find('a').eq(1).click()
  cy.getByData('titulo-cartoes').should('exist').and('have.text','Meus cartões')
  })
  it('Deve conseguir acessar a página Serviços', () => {
    cy.visit('/')
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('app-home').find('a').eq(2).click()
    cy.getByData('servico').contains('Empréstimo')
    })
    it('Deve conseguir acessar a página Investimentos', () => {
      cy.visit('/')
      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();
      cy.getByData('app-home').find('a').eq(3).click()
      cy.getByData('titulo-investimentos').contains('Investimentos')
      })
})