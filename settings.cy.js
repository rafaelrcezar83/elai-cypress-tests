describe('Configurações', () => {
  before(() => cy.login());

  it('Deve acessar as configurações do sistema', () => {
    cy.visit('https://elai-63aae.web.app/settings');
    cy.wait(2000);
  });
});
