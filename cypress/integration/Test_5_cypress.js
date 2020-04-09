//Test 5 

describe('Test 5 - User registration and Log in using UI', function () {

  const useremail = 'user1@netguru.com'
  const password = 'password123'

  //Working
  it('Register and log in using the UI', () => {

      //Create a user using the UI (User may already be created)
      cy.visit('/users/sign_up')
      cy.get('#user_email').type(useremail)
      cy.get('#user_password').type(password)
      cy.get('#user_password_confirmation').type(password + '{enter}')
      //Go to the page 5
      cy.visit('/pages/test_5')
      //Check that the page contains the user email
      cy.contains(useremail)
    })

  //   //Not working -> Goal is to speed up the test avoiding the registration through UI
  //   it('Register using direct POST request and login using the UI', () => {
  //     //Log in as user username
  //     const req = {
  //         method: 'POST',
  //         url: '/users',
  //         form: true, // we are submitting a regular form body
  //         body: {
  //           //We need to add the auth token.
  //           form: true,
  //           failOnStatusCode: true,
  //           'user[email]': 'user2@netguru.com',
  //           'user[password]': 'password123',
            
  //         },
  //       }

  //     cy.request(req)
  //     cy.visit('/pages/test_5')
  //     cy.get('#user_email').type('user2@netguru.com')
  //     cy.get('#user_password').type('password123')
  //     cy.contains(useremail)
  //   })

  //   //Not working. Should we install cypress-on-rails gem in this project in order to reuse the user Factory (ruby file)?
  // it('Register using force login from cypress-on-rails github', () => {
  //     cy.appFactories([['create', 'user', {email: 'user3@netguru.com'}]])
  //     cy.forceLogin({email: 'user3@netguru.com'})
  //     cy.visit('/pages/test_5')
  //     cy.contains('user3@netguru.com')
  //     }
  // )
    it('Valid Log in using the factory', () => {
      const email = 'test@netguru.com'
      const password = 'haslo1234'
      cy.factory('userw', {email: email, password: password})
      cy.visit('/users/sign_in')
      cy.get('#user_email').type(email)
      cy.get('#user_password').type(password+ '{enter}')
      cy.visit('/pages/test_5')
      cy.contains(email)
    })

    it('Invalid password Log in using the factory', () => {
      const email = 'test@netguru.com'
      const password = 'haslo1234'
      cy.factory('userw', {email: email, password: password})
      cy.visit('/users/sign_in')
      cy.get('#user_email').type(email)
      cy.get('#user_password').type('WrongPassword' + '{enter}')
      cy.contains('Invalid Email or password')
    })

    it('Invalid username Log in using the factory', () => {
      const email = 'test@netguru.com'
      const password = 'haslo1234'
      cy.factory('userw', {email: email, password: password})
      cy.visit('/users/sign_in')
      cy.get('#user_email').type("wronguser@netguru.com")
      cy.get('#user_password').type(password + '{enter}')
      cy.contains('Invalid Email or password')
    })

    it('Log in without creating the user first', () => {
      const email = 'test@netguru.com'
      const password = 'haslo1234'
      cy.visit('/users/sign_in')
      cy.get('#user_email').type(email)
      cy.get('#user_password').type(password + '{enter}')
      cy.contains('Invalid Email or password')
    })
})