describe('POST /VerifyRegister', function(){

    before(function(){
        cy.setToken()
        
    })
    it ('Register a key entry to an account', function(){

        const registerKeyAccount = {
            key: "",
            keyType: "evp"
        }

        cy.api({
            method : 'POST',
            url : '/dict/key/97344890038',
            body: registerKeyAccount,
            headers: {
                'authorization': 'Bearer '+Cypress.env('token'),
              }

        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log()
        })

    })

}) 
