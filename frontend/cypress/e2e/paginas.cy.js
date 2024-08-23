describe('Testando múltiplas páginas', () => {
  it('Deve conseguir acessar a página Início', () => {
    cy.visit('/')
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('app-home').find('a').eq(0).click()
    cy.getByData('titulo-transacao').contains('Nova Transação')
    cy.location('pathname').should('eq','/home')
    })
  it('Deve conseguir acessar a página de cartões', () => {
  cy.visit('/')
  cy.getByData('botao-login').click();
  cy.getByData('email-input').type('neilton@alura.com');
  cy.getByData('senha-input').type('123456');
  cy.getByData('botao-enviar').click();
  cy.location('pathname').should('eq','/home')
  cy.getByData('app-home').find('a').eq(1).click()
  cy.getByData('titulo-cartoes').should('exist').and('have.text','Meus cartões')
  cy.location('pathname').should('eq','/home/cartoes')
  })
  it('Deve conseguir acessar a página Serviços', () => {
    cy.visit('/')
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.location('pathname').should('eq','/home')
    cy.getByData('app-home').find('a').eq(2).click()
    cy.getByData('servico').contains('Empréstimo')
    cy.location('pathname').should('eq','/home/servicos')
    })
    it('Deve conseguir acessar a página Investimentos', () => {
      cy.visit('/')
      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();
      cy.location('pathname').should('eq','/home')
      cy.getByData('app-home').find('a').eq(3).click()
      cy.getByData('titulo-investimentos').contains('Investimentos')
      cy.location('pathname').should('eq','/home/investimentos')
      })
})