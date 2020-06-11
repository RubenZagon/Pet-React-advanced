describe('Petgram', function () {
  it('show if the app works', function () {
    cy.visit('/');
  });

  it('go to category and show a single photo', function () {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('go to home page using the navbar', function () {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });

  it('if a not register or login user go to favs, must show the forms to access ', function () {
    cy.visit('/favs');
    cy.get('form').should('have.length', 2);
  })

});
