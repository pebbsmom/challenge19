describe('Tech Quiz E2E Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('starts and completes the quiz', () => {
    cy.get('[data-testid="start-quiz-btn"]').click();

    cy.get('[data-testid="question"]').should('exist');

    // Answer all questions
    cy.get('body').then(($body) => {
      function answerQuestion() {
        cy.get('[data-testid^="option-"]').first().click();

        cy.get('body').then(($newBody) => {
          if ($newBody.find('[data-testid="question"]').length > 0) {
            answerQuestion();
          }
        });
      }

      answerQuestion();
    });

    cy.get('[data-testid="score"]').should('exist');
    cy.get('[data-testid="restart-quiz-btn"]').click();
    cy.get('[data-testid="question"]').should('exist');
  });
});
