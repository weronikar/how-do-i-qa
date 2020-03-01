//A.
describe('test_2', () => {
    it('Filling out the form - all fields must be filled in', () => {
        cy.visit('/pages/test_2');
        cy.contains('Test #2');
        cy.get('#example_textfield').type('Hello, World');
        cy.get('[type="checkbox"]').check();
        cy.get('select').select('Opt 2'); //Opt 2 = value from DOM
        cy.get('[type="radio"]').check('opt 2'); // opt 2 = value from DOM
    it('Submitting the form');
        //cy.get('form').submit()   // CZEMU TO NIE DZIALA ????
        cy.contains('Submit').click();
    it('Data in "The submitted data" section dispalyed');
       cy.contains('Submitted text: Hello, World');
       cy.contains('Checkbox checked: 1');
       cy.contains('Select option picked: Opt 2');
       cy.contains('Radio option picked: opt 2');
    it('Success flash message');
       cy.contains('Submitted successfully');
     });
   });


//B.
   describe('test_2', () => {
    it('Filling out the form - one field is missing', () => {
        cy.visit('/pages/test_2');
        cy.contains('Test #2');
        cy.get('#example_textfield').type('Hello, World');
        cy.get('[type="checkbox"]').check();
        cy.get('select').select('Opt 2'); //Opt 2 = value from DOM
    it('Submitting the form');
        //cy.get('form').submit()   // CZEMU TO NIE DZIALA ????
        cy.contains('Submit').click();
    it('Data in "The submitted data" section dispalyed');
       cy.contains('Submitted text: Hello, World');
       cy.contains('Checkbox checked: 1');
       cy.contains('Select option picked: Opt 2');
    it('Error flash message');
        cy.contains('Some data was missing');
     });
   });


//C.
   describe('test_2', () => {
    it('Filling out the form - message at the bottom when you dont submit anything', () => {
        cy.visit('/pages/test_2');
        cy.contains('Test #2');
    it('Message displayed when you visited page and didnt submit anything');
        cy.contains('Data will appear here after submission.');
     });
   });