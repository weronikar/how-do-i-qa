describe('test_1', () => {
    it('Clicking on the correct Next button', () => {
        cy.visit('/pages/test_1');
        cy.contains('Test #1')
        cy.get('#footer').find('.btn').click()
        cy.contains ('Test #2')
     });
   });


