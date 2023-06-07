import cy from 'cypress';

describe('Example Test', () => {
	it('Visits the app root url', () => {
		cy.visit('/login');
	});
});
