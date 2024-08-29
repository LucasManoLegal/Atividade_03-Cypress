describe('Menu de navegação', () => {
  context('Resolução de 720p', () => {
    beforeEach(() => {
      cy.visit('/');
      /* Roda os testes como se fossem em um monitor de 720p de resolução */
      cy.viewport(1280, 720);
    });

    /* seu teste aqui */
    it('Deve conseguir acessar a página Investimentos', () => {
      cy.visit('/');
      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();
      cy.location('pathname').should('eq', '/home');
      cy.getByData('app-home').find('a').eq(3).click();
      cy.getByData('titulo-investimentos').contains('Investimentos');
      cy.location('pathname').should('eq', '/home/investimentos');
    });
  });
  context('Resolução do iphone-5 ', () => {
    beforeEach(() => {
      cy.visit('/');
      /* roda os testes como se fossem em um dispositivo com a resolução de um iphone-5 */
      cy.viewport('iphone-5');
    });

    /* seu teste aqui */
    it('Deve existir um menu burguer', () => {
      cy.visit('/');

      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();

      cy.location('pathname').should('eq', '/home');

      cy.getByData('menu-burguer').click();
      cy.getByData('menu-lateral').find('a').eq(3).click();

      cy.location('pathname').should('eq', '/home/investimentos');
    });
  });
  context('Resolução do iphone-6 ', () => {
    beforeEach(() => {
      cy.visit('/');
      /* roda os testes como se fossem em um dispositivo com a resolução de um iphone-6 no modo paisagem */
    });

    /* seu teste aqui */
    it('Deve conseguir acessar a página Serviços', () => {
      cy.visit('/');
      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();
      cy.location('pathname').should('eq', '/home');
      cy.viewport('iphone-6', 'landscape');
      cy.getByData('app-home').find('a').eq(2).click();
      cy.getByData('servico').contains('Empréstimo');
      cy.location('pathname').should('eq', '/home/servicos');
    });
  });
});
