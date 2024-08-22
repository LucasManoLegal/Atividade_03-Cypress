describe('Formulário cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Usuário deve conseguir se cadastrar com sucesso', () => {

    cy.visit('/');

    cy.getByData('botao-cadastro').click(); /* testaremos agora o botão 'cadastrar' */

    cy.getByData('nome-input').type('Jose da Silva');
    cy.getByData('email-input').type('ze@email.com');
    cy.getByData('senha-input').type('456789');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!');

    /* a mensagem exibida deve ser: "Usuário cadastrado com sucesso!" */

    /* clicamos no botão cadastro e inserimos os dados de cadastro para testar o cenário feliz, onde o cadastro
  
  será realizado com sucesso. */
  });
});
