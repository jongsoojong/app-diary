import { addNumbers } from './numbers';

test('test basic jest', () => {
	expect(true).toBeTruthy();
});

test('test import', () => {
	console.log(addNumbers());
});