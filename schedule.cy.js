describe('Agendamento de paciente', () => {
  before(() => cy.login());

  it('Deve abrir novo agendamento e testar os botões', () => {
    cy.visit('https://elai-63aae.web.app/schedule');
    cy.contains('Novo Paciente').click();

    cy.contains('Profissional').click();
    cy.wait(1000);
    cy.contains('Pessoal').click();
    cy.wait(1000);
  });
});
