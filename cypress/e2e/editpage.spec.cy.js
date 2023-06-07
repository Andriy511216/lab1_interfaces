describe('Edit Profile Page', () => {
	beforeEach(() => {
		cy.visit('/editprofile');
	});

	it('should display the Edit Profile page', () => {
		cy.get('h1').should('contain', 'Edit Profile');
	});
	//
	it('should fill in the form fields', () => {
		const username = 'admin';
		const email = 'admin@example.com';
		const birthday = '1991-01-01';
		const sex = '2';

		cy.get('input#firstName').type(username);
		cy.get('input#email').type(email);
		cy.get('input#date').type(birthday);
		cy.get('select#sex').select(sex);

		cy.get('input#firstName').should('have.value', username);
		cy.get('input#email').should('have.value', email);
		cy.get('input#date').should('have.value', birthday);
		cy.get('select#sex').should('have.value', sex);
	});

	it('should submit the form', () => {
		cy.get('input#firstName').type('JohnDoe');
		cy.get('input#email').type('johndoe@example.com');
		cy.get('input#date').type('1990-01-01');
		cy.get('select#sex').select('2');

		cy.get('.btn.btn-primary').click();
		cy.url().should('include', '/profile');
	});
});
