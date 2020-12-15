const { it, expect, test } = require('@jest/globals');
const { describe } = require('yargs');
const reverse = require('./index.js');

test('1234567 -> 7654321', () => {
    expect(reverse('1234567')).toBe('7654321');
});
test('343434 -> 434343', () => {
    expect(reverse('343434')).toBe('434343');
});
test('abcdef -> fedcba', () => {
    expect(reverse('abcdef')).toBe('fedcba');
});
test('hello -> olleh', () => {
    expect(reverse('hello')).toBe('olleh');
});