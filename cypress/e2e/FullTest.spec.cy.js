describe('The login Page', () => {
	beforeEach(() => {
		cy.visit('/login');
	});

	it('Register check', () => {
		cy.get('p.text-center').contains('Sing Up').click();
		cy.url().should('include', '/registration');
	});

	it('Register user', () => {
		cy.get('p.text-center').contains('Sing Up').click();
		cy.url().should('include', '/registration');
		cy.get('input#username').type('JohnDoe');
		cy.get('input#email').type('johndoe@example.com');
		cy.get('input#password').type('password');
		cy.get('input#confirmPassword').type('password');
		cy.get('select#sex').select('Man');
		cy.get('input#birthday-input').type('2023-06-03');
		cy.get('#submitBtn').click();
		cy.url().should('include', '/login');
	});

	it('Login user', () => {
		cy.get('input#loginEmail').type('admin@admin.com');
		cy.get('input#loginPassword').type('admin');
		cy.get('.btn.btn-primary').click();
		cy.url().should('include', '/profile');
	});
});
