describe('Registrarse en la página', () => {
  it('Registrarse correctamente en la página', () => {
    const dia = "22";
    const mes = "December";
    const año = "1994";

    cy.fixture('example.json').then((datos) => {      
      // Visitar la página de inicio de sesión
      cy.visit('https://www.automationExercise.com');

      // Efectuar el registro
      cy.get('a[href="/login"]').click();
      cy.get('input[name="name"]').type(datos.name);
      cy.get('input[data-qa="signup-email"]').type(datos.email);
      cy.get('button').contains('Signup').click();

      //Rellenar formulario
      cy.get('#id_gender1').check();
      cy.get('#password').type(datos.password)
      cy.get('#days').select(dia);
      cy.get('#months').select(mes);
      cy.get('#years').select(año);
      cy.get('#newsletter').check();
      cy.get('#first_name').type(datos.name);
      cy.get('#last_name').type(datos.lastname);
      cy.get('#address1').type('Callejón Diagon');
      cy.get('#country').type('Australia');
      cy.get('input[name="state"]').type('New South Wales');
      cy.get('input[name="city"]').type('Sydney');
      cy.get('#zipcode').type('123456');
      cy.get('#mobile_number').type('123456789');
      cy.get('button').contains('Create Account').click();

      //Verificar que el account se haya creado correctamente
      cy.get('h2[data-qa="account-created"]').should('be.visible').then((Element) =>{
        if(Element.text() === 'Account Created!'){

          cy.get('a').contains('Continue').click();
        

        }else{

          cy.log('La cuenta no se ha creado correctamente');

        }
      });
    });    
  });
});

