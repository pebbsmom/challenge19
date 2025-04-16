import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('<Quiz /> Component', () => {
  it('renders the start button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('exist');
  });

  it('starts the quiz when clicking start', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('[data-testid="question"]').should('exist');
  });
});
