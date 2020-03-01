// td -> table division 
// tr -> table row 
describe('test_3', () => {
    it('Page with simple js - first row', () => {
        cy.visit('/pages/test_3');
        cy.contains('Test #3');
        cy.contains('First row').parent('tr').click();
        cy.should('have.class', 'highlighted')   
     });
   });


   describe('test_3', () => {
    it('Page with simple js - last row', () => {
        cy.visit('/pages/test_3');
        cy.contains('Test #3');
        cy.contains('Last row').parent('tr').click();
        cy.should('have.class', 'highlighted')   
     });
   });