describe('Checkout Page', () => {
	beforeEach(() => {
		cy.visit('/checkout');
	});

	it('View field for City input', () => {
		cy.get('input#city').should('exist');
	});

	it('View field for Address input', () => {
		cy.get('input#address').should('exist');
	});

	it('View field for Phone input', () => {
		cy.get('input#phone').should('exist');
	});

	it('View Submit button', () => {
		cy.get('.bt').should('exist');
	});

	it('Enter and display data', () => {
		const city = 'Kyiv';
		const address = 'Grushevskogo,10';
		const phone = '380999999999';

		cy.get('input#city').type(city);
		cy.get('input#address').type(address);
		cy.get('input#phone').type(phone);

		cy.get('input#city').should('have.value', city);
		cy.get('input#address').should('have.value', address);
		cy.get('input#phone').should('have.value', phone);
	});

	it('Click Back to Cart', () => {
		cy.get('.btn.btn-outline-primary').click();

		cy.url().should('include', '/cart');
	});
});
