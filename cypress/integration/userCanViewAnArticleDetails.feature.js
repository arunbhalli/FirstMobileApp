describe('view details of an article', () => {
  before(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json'
    })
    cy.viewport('iphone-6')
    cy.visit('/');
  });
  describe('by clicking on an article in list ', () => {
    before(() => {
      cy.get('[data-testid=article-1]').click()
    });

    it('is expected to display a title', () => {
      cy.get('[data-testid=title]').should('contain', 'Something');
    });
  });
});
