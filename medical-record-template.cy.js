describe('Padrões de Prontuário', () => {
  before(() => cy.login());

  it('Deve acessar a tela de padrões de prontuário', () => {
    cy.visit('https://elai-63aae.web.app/medical-record-template');
    cy.wait(2000);
  });
});
