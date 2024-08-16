describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.visit("http://localhost:3000")
    cy.verifyByData('titulo-principal', 'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    cy.getByData('vantagens', 'Vantagens do nosso banco:')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit("http://localhost:3000")
    cy.getByData('titulo1','Conta e cartão gratuitos') 
    cy.getByData('titulo2','Saques sem custo')
    cy.getByData('titulo3','Programa de pontos')
    cy.getByData('titulo4','Seguro Dispositivos')
    
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.visit("http://localhost:3000")
    cy.getByData('p1','Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.getByData('p2','Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
    cy.getByData('p3','Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.getByData('p4','Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})

