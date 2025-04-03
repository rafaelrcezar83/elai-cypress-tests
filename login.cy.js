describe('Login e acesso ao Dashboard', () => {
  it('Deve logar com sucesso e acessar o Dashboard', () => {
    cy.visit('https://elai-63aae.web.app/login');
    cy.get('input[type="email"]').type('rafael.reufy+elai+@gmail.com');
    cy.get('input[type="password"]').type('ra052810EL@');
    cy.contains('Entrar').click();
    cy.url().should('include', '/dashboard');
    cy.wait(3000);
    cy.contains('Dashboard').should('be.visible');
  });
});
