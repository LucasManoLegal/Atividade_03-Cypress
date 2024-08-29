describe('Testando múltiplas páginas', () => {
  it('Deve permitir que o usuário faça login no site', {browser: 'edge'}, () => {
    cy.visit('http://localhost:3000');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
  });

  it.only('Não deve permitir um campo em branco', () => {
    cy.visit('/');

    cy.getByData('botao-login').click();

    // cy.getByData('email-input').type('') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */

    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo email é obrigatório'); /* a
    
    mensagem exibida deve ser: "O campo email é obrigatório" */
  });

  it.only('Não deve permitir um campo em branco', () => {
    cy.visit('/');

    cy.getByData('botao-login').click();

    cy.getByData('email-input').type('neilton@alura');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo de senha é obrigatório'); /* a
    
    mensagem exibida deve ser: "O campo de senha é obrigatório" */
  });
  it.only('Não deve permitir um e-mail inválido!', () => {
    cy.visit('/');

    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    
    /* clicamos no botão login e inserimos os dados de login para testar o cenário triste, onde o email está inválido */
    })
});
