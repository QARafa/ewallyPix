describe('DELETE /dictKey', function(){

    before(function(){
        cy.setToken()
        
    })
    it ('Delete a key entry from an account', function(){

        const deleteKey = {
            
        }

        cy.api({
            method : 'DELETE',
            url : '/dict/key/97344890038?id=30905c2a-5e01-462b-8ae3-3e3240caba0d',
            headers: {
                'authorization': 'Bearer '+Cypress.env('token'),
              }

        }).then(function(response){
            expect(response.status).to.eql(200)
            cy.log()
        })

    })
})