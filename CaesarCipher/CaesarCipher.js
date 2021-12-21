function CipherEncryptor(string, key, chars = 'abcdefghijklmnopqrstuvwxyz') {
    let charset = chars.split('');
    let stringArray = string.split('');
    key = key % charset.length;
    for (let i = 0; i < stringArray.length; i++) {
        let charIndex = charset.indexOf(stringArray[i]);
        let newIndex = charIndex + key;
        stringArray[i] = charset[newIndex % charset.length];
    }
    return stringArray.join('');
}

function CipherDecryptor(string, key, chars = 'abcdefghijklmnopqrstuvwxyz') {
    
}

module.exports.CipherEncryptor = CipherEncryptor;