describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    cy.get('[data-test="vantagem1"]').contains('Conta e cartão gratuitos')
    cy.get('[data-test="vantagem2"]').contains('Saques sem custo')
    cy.get('[data-test="vantagem3"]').contains('Programa de pontos')
    cy.get('[data-test="vantagem4"]').contains('Seguro Dispositivos')
  })
})