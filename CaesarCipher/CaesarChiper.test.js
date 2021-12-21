const { CipherEncryptor } = require('./CaesarCipher');

describe ('Caesar Cipher encoding and decoding of messages', () => {
    test ('encode messages', () => {
        expect(CipherEncryptor('xyz', 2)).toBe('zab');
        expect(CipherEncryptor('abc', 0)).toBe('abc');
        expect(CipherEncryptor('abc', 3)).toBe('def');
        expect(CipherEncryptor('xyz', 5)).toBe('cde');

        expect(CipherEncryptor('abc', 0, 'abc456')).toBe('abc');
        expect(CipherEncryptor('abc', 2, 'abc456')).toBe('c45');
    });
});
