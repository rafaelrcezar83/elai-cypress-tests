describe('Cadastro de Secretária', () => {
  before(() => cy.login());

  it('Deve cadastrar nova secretária', () => {
    cy.visit('https://elai-63aae.web.app/secretaries');
    cy.contains('Nova Secretária').click();
    cy.get('input[type="email"]').type('secretaria.reufy01@gmail.com');
    cy.contains('Verificar').click();
    cy.wait(2000);
  });
});
