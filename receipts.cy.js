describe('Recebimentos', () => {
  before(() => cy.login());

  it('Deve navegar pelas abas: fluxo de caixa, recibo, cupom de desconto', () => {
    cy.visit('https://elai-63aae.web.app/receipts');
    cy.contains('Fluxo de Caixa').click();
    cy.wait(1000);
    cy.contains('Recibo').click();
    cy.wait(1000);
    cy.contains('Cupom de Desconto').click();
    cy.wait(1000);
  });
});
