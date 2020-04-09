//interesting link for routes, using factories: https://blog.simplificator.com/2019/10/11/setting-up-cypress-with-rails/
//clean database called before each tests (from index.js)

describe('test_6', () => {
    it('2 Countries created', () => {
        cy.factory('country', { name: 'Poland', code: 'PL'})
        cy.factory('country', { name: 'France', code: 'FR'})
        cy.visit('/pages/test_6')
        cy.contains('France | FR')
        cy.contains('Poland | PL')
     });
     it('No countries created', () => {
       cy.visit('/pages/test_6')
       cy.contains('No data')
     })
   });
