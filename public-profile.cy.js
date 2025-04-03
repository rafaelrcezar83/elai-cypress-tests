describe('Perfil Público', () => {
  before(() => cy.login());

  it('Deve acessar e rolar a tela do perfil público', () => {
    cy.visit('https://elai-63aae.web.app/public-profile');
    cy.scrollTo('bottom');
    cy.wait(2000);
  });
});
