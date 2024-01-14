const calculator = require('./dodaj')

test('Aplikacja dodaje 100 liczb naturalnych', () => {
    const expectedResult = 5050; // Suma liczb od 1 do 100
    expect(calculator.add100()).toBe(expectedResult);
});
