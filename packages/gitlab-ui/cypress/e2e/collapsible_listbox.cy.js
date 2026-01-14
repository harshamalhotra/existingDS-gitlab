const testId = (id) => `[data-testid="${id}"]`;

describe('Collapsible dropdown in form group', () => {
  it(
    'opens dropdown when form label is clicked',
    // Real events are not supported on firefox
    { browser: '!firefox' },
    () => {
      cy.visitStory('base-dropdown-collapsible-listbox', {
        story: 'in-form-group',
      });

      cy.get(testId('base-dropdown-toggle')).should('have.attr', 'aria-expanded', 'true');
      cy.get(`${testId('listbox-item-prod')}:first span`).realClick();
      cy.get(testId('base-dropdown-toggle')).should('have.attr', 'aria-expanded', 'false');
      cy.get('label[for="department-picker"]').realClick();
      cy.get(testId('base-dropdown-toggle')).should('have.attr', 'aria-expanded', 'true');
    },
  );

  it(
    'opens searchable dropdown when form label is clicked',
    // Real events are not supported on firefox
    { browser: '!firefox' },
    () => {
      cy.visitStory('base-dropdown-collapsible-listbox', {
        story: 'in-form-group-searchable',
      });

      cy.get(testId('base-dropdown-toggle')).should('have.attr', 'aria-expanded', 'true');
      cy.get(`${testId('listbox-item-prod')}:first span`).realClick();
      cy.get(testId('base-dropdown-toggle')).should('have.attr', 'aria-expanded', 'false');
      cy.get('label[for="department-picker"]').realClick();
      cy.get(testId('base-dropdown-toggle')).should('have.attr', 'aria-expanded', 'true');
    },
  );
});
