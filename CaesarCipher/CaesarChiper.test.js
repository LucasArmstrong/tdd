const { CipherEncryptor, CipherDecryptor } = require('./CaesarCipher');

describe ('Caesar Cipher encoding and decoding of messages', () => {
    test ('encode messages', () => {
        expect(CipherEncryptor('xyz', 2)).toBe('zab');
        expect(CipherEncryptor('abc', 0)).toBe('abc');
        expect(CipherEncryptor('abc', 3)).toBe('def');
        expect(CipherEncryptor('xyz', 5)).toBe('cde');
        expect(CipherEncryptor('def', 25)).toBe('cde');

        expect(CipherEncryptor('abc', 0, 'abc456')).toBe('abc');
        expect(CipherEncryptor('abc', 2, 'abc456')).toBe('c45');
    });

    test ('decode messages', () => {
        expect(CipherDecryptor('zab', 2)).toBe('xyz');
        expect(CipherDecryptor('abc', 0)).toBe('abc');
        expect(CipherDecryptor('def', 3)).toBe('abc');
        expect(CipherDecryptor('cde', 5)).toBe('xyz');
        expect(CipherDecryptor('cde', 25)).toBe('def');

        expect(CipherDecryptor('abc', 0, 'abc456')).toBe('abc');
        expect(CipherDecryptor('c45', 2, 'abc456')).toBe('abc');
    });
});
