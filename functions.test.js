const { returnTwo, greeting, add, multiply, divide, subtract } = require('./testing-lab/functions.js');

test('will return the number 2', () => {
    expect(returnTwo()).toBe(2)
})

test('this test should take in a name and print a greeting with that name', () => {
    expect(greeting('James')).toBe('Hello, James.')
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

test('this will add num1 and num2', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})

describe('mathFunctions', () => {
    test('this will multiply num1 and num2', () => {
        expect(multiply(2, 4)).toBe(8)
        expect(multiply(10, 9)).toBe(90)
    })

    test('this will divide num1 and num2', () => {
        expect(divide(10, 2)).toBe(5)
        expect(divide(22, 11)).toBe(2)
    })

    test('this will subtract num1 and num2', () => {
        expect(subtract(26, 2)).toBe(24)
        expect(subtract(100, 10)).toBe(90)
    })

})