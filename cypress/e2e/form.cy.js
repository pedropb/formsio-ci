describe('Form.io Demo', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('validates required title field', () => {
        // Fill in other required fields but skip title
        cy.get('input[placeholder="Enter your first name"]').type('John');
        cy.get('input[placeholder="Enter your last name"]').type('Doe');

        // Click submit
        cy.get('button[type="submit"]').click();

        // Assert error message is shown
        cy.get('.formio-error-wrapper').should('contain', 'Title is required');

        // Assert greeting is not shown
        cy.get('#greeting').should('have.class', 'hidden');
    });

    it('validates required last name field', () => {
        // Fill in other fields but skip last name
        cy.contains('Select a title').click({ force: true });
        cy.contains('Mr.').click();
        cy.get('input[placeholder="Enter your first name"]').type('John');

        // Click submit
        cy.get('button[type="submit"]').click();

        // Assert error message is shown
        cy.get('.formio-error-wrapper').should('contain', 'Last Name is required');

        // Assert greeting is not shown
        cy.get('#greeting').should('have.class', 'hidden');
    });

    it('displays greeting with submitted data', () => {
        // Fill in all fields
        cy.contains('Select a title').click({ force: true });
        cy.contains('Mr.').click();
        cy.get('input[placeholder="Enter your first name"]').type('John');
        cy.get('input[placeholder="Enter your last name"]').type('Doe');

        // Click submit
        cy.get('button[type="submit"]').click();

        // Assert greeting is shown with correct text
        cy.get('#greeting')
            .should('not.have.class', 'hidden')
            .and('contain', 'Hello, Mr. John Doe');
    });
}); 