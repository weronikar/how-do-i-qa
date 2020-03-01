describe('test_0', () => {
    it('Click Next button', () => {
       cy.visit('/pages/test_0');
       cy.contains('Test #0')
       cy.get('.btn').click()
       cy.contains ('Test #1')
     });
   });