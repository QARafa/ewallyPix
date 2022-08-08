describe('GET /dictKey', function(){

    before(function(){
        cy.setToken()
        
    })
    it ('List users registered keys', function(){

        const listUserKeys = {
            
        }

        cy.api({
            method : 'GET',
            url : '/dict/key/97344890038',
            headers: {
                'authorization': 'Bearer '+Cypress.env('token'),
              }

        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log()
        })

    })

    it ('Get a key registered in the account', function(){

        const userspecificationKey = {
            
        }

        cy.api({
            method : 'GET',
            url : '/dict/key/97344890038/8cc19212-cf3f-43fc-aa93-51f289f74db2',
            headers: {
                'authorization': 'Bearer '+Cypress.env('token'),
              }

        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log()
        })

    })

    it ('Send code to verify key', function(){

        const sendCode = {
            
        }

        cy.api({
            method : 'GET',
            url : '/dict/key/97344890038?key=rmosantos25@gmail.com&keyType=email',
            headers: {
                'authorization': 'Bearer '+Cypress.env('token'),
              }

        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log()
        })

    })
})
