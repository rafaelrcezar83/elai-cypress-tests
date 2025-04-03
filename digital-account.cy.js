describe('Conta Digital', () => {
  before(() => cy.login());

  it('Deve navegar pelo formulário da conta digital', () => {
    cy.visit('https://elai-63aae.web.app/digital-account');
    cy.get('form').scrollTo('bottom');
    cy.wait(2000);
  });
});
