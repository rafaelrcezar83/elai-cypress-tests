describe('Atendimento', () => {
  before(() => cy.login());

  it('Deve preencher novo serviço e testar botões', () => {
    cy.visit('https://elai-63aae.web.app/attendance');
    cy.contains('Novo Serviço').click();
    cy.url().should('include', '/attendance-form');

    cy.get('input[name="serviceName"]').type('Consulta Geral');
    cy.get('textarea[name="description"]').type('Atendimento clínico completo.');
    cy.contains('Salvar').click();
    cy.wait(2000);
  });
});
