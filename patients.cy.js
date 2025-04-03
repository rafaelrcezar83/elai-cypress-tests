import { gerarCPF } from '../support/utils';

describe('Cadastro de Paciente', () => {
  before(() => cy.login());

  it('Deve cadastrar um novo paciente com CPF válido', () => {
    cy.visit('https://elai-63aae.web.app/patients');
    cy.contains('Novo Paciente').click();
    cy.url().should('include', '/patient-form');

    cy.get('input[name="name"]').type('João da Silva');
    cy.get('input[name="email"]').type('joao.teste@email.com');
    cy.get('input[name="cpf"]').type(gerarCPF());
    cy.get('input[name="phone"]').type('11999999999');

    cy.contains('Salvar Paciente').click();
    cy.wait(2000);
  });
});
