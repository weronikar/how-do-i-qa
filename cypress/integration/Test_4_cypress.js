describe('test_4', () => {
    it('Pages with ajax calls', () => {
        cy.visit('/pages/test_4');
        cy.contains('Click me to fire an AJAX call').click();
        cy.contains('This is answer from the server');
     });
   });
