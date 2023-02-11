# xEncrypt V1.0.0

The smart encryption library you've always wanted

xEncrypt is a simple and versatile encryption library for Node.js that supports multiple encryption algorithms and encryption modes. With X-Encrypt, you can easily encrypt and decrypt data, generate encryption keys, and customize the encryption process to suit your needs.

[xEncrypt NPM](https://www.npmjs.com/package/x-encrypt)
[xEncrypt Github](https://github.com/tommypantss/xEncrypt)


## Features
- Support for multiple encryption algorithms, including symmetric encryption (e.g. AES) and public key (e.g. RSA)
- Key generation API for generating encryption keys, with options for random key generation or key derivation from a user-provided password
- Support for multiple encryption modes, including ECB, CBC, CFB, and OFB
- Thorough error handling to provide information about what went wrong when something goes wrong

## Installation
To use X-Encrypt in your project, simply run the following command:

```
npm install x-encrypt
```

## Usage
Here's a simple example of how to use X-Encrypt to encrypt and decrypt data:

```
const XEncrypt = require("x-encrypt");
const algorithm = "aes-256-cbc";
const password = "secret-password";

// Generate encryption key
const key = XEncrypt.generateKey({ algorithm, password });

// Encrypt data
const data = "sensitive data";
const encryptedData = XEncrypt.encrypt(data, key, algorithm);

// Decrypt data
const decryptedData = XEncrypt.decrypt(encryptedData, key, algorithm);

console.log(decryptedData); // "sensitive data"
```

## Key Generation
X-Encrypt provides an API for generating encryption keys, which can be used to encrypt and decrypt data. You can generate random keys or derive keys from a user-provided password. Here's an example of how to generate a random key:

```
const XEncrypt = require("x-encrypt");
const algorithm = "aes-256-cbc";

// Generate random key
const key = XEncrypt.generateKey({ algorithm });

console.log(key); // hexadecimal string representation of the key
```

And here's an example of how to derive a key from a password:

```
const XEncrypt = require("x-encrypt");
const algorithm = "aes-256-cbc";
const password = "secret-password";

// Derive key from password
const key = XEncrypt.generateKey({ algorithm, password });

console.log(key); // hexadecimal string representation of the key
```

## Encryption and Decryption
X-Encrypt provides methods for encrypting and decrypting data using the encryption key. Here's an example of how to encrypt and decrypt data:

```
const XEncrypt = require("x-encrypt");
const algorithm = "aes-256-cbc";
const password = "secret-password";

// Generate encryption key
const key = XEncrypt.generateKey({ algorithm, password });

// Encrypt data
const data = "sensitive data";
const encryptedData = XEncrypt.encrypt(data, key, algorithm);

// Decrypt data
const decryptedData = XEncrypt.decrypt(encryptedData, key, algorithm);

console.log(decryptedData)
```

## Support
If my tools have made your projects better, consider [buying me a coffee](https://www.buymeacoffee.com/tommypants). Thank you.
