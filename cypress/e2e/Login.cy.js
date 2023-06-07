describe('The login Page', () => {
	beforeEach(() => {
		cy.visit('/login');
	});

	it('should fill in the form and log in successfully', () => {
		cy.get('input[type="email"]').type('admin@admin.com');
		cy.get('input[type="password"]').type('admin');
		cy.get('button#login').click();
		cy.url().should('eq', '');
	});
});
