describe('Dashboard - Visualização', () => {
  before(() => cy.login());

  it('Deve visualizar o Dashboard com sucesso', () => {
    cy.visit('https://elai-63aae.web.app/dashboard');
    cy.wait(3000);
    cy.contains('Dashboard').should('be.visible');
  });
});
