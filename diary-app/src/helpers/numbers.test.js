import { addNumbers, addJong } from './numbers';

test('test basic jest', () => {
	expect(true).toBeTruthy();
});

test('test addNumbers String', () => {
	expect( addNumbers(true, '5')).toBe(8);
	expect( addNumbers(2, 2)).toBe(4);
});

test('test addNumbers Boolen', () => {
	expect( addNumbers(true, false )).toBe(8) 
});

test('test addJong', () => {
	expect( addJong('hi Brandon805')).toBe('Jong said, "hi Brandon805"')
})