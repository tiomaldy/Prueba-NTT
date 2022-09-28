
import {slowCypressDown} from 'cypress-slow-down'

slowCypressDown(300)


describe('Flujo de compra en pagina', () => { 
})
it('Prueba E2E de compras', () => {
  cy.visit('https://www.demoblaze.com/')
  cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
  cy.get('.col-sm-12 > .btn').click()
  cy.get('.col-sm-12 > .btn').click()
  cy.get('.active > .nav-link').click()
  cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
  cy.get('.col-sm-12 > .btn').click()
  cy.get('.active > .nav-link').click()
  cy.get('#cartur').click()
  cy.get('.col-lg-1 > .btn').click()
  cy.get('#name').type("Jose")
  cy.get('#country').type("Ecuador")
  cy.get('#city').type("Guayaquil")
  cy.get('#card').type("098576613")
  cy.get('#month').type("September")
  cy.get('#year').type("2022")
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.get('.confirm').click()
  cy.visit('https://www.demoblaze.com/')
})
it('Caso de prueba 1 ', () => {
  cy.visit('https://www.demoblaze.com/')
  cy.get('#signin2').click()
  cy.get('#sign-username').type("Lopez")
  cy.get('#sign-password').type("compra1")
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.on('window:alert',(text)=> {
    expect(text).to.contains('This user already exist.')
})
})

it('Caso de prueba 2 ', () => {
  cy.visit('https://www.demoblaze.com/')
  cy.get('#login2').click()
  cy.get('#loginusername').type("Maldy")
  cy.get('#loginpassword').type('compra1')
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  

})
