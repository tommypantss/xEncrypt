// x-encrypt.js
const crypto = require("crypto");
const { XEncryptError, InvalidAlgorithmError, MissingPasswordError } = require("./x-encrypt-error");

class XEncrypt {
  static generateKey(options) {
    const algorithm = options.algorithm || "aes-256-cbc";
    const password = options.password || null;
    const keySize = options.keySize || 32;

    if (!crypto.getCiphers().includes(algorithm)) {
      throw new InvalidAlgorithmError();
    }

    if (keySize < 16) {
      throw new XEncryptError("Key size must be at least 16 bytes");
    }

    if (!password) {
      throw new MissingPasswordError();
    }

    const key = crypto.scryptSync(password, "salt", keySize);

    return key.toString("hex");
  }
}

module.exports = XEncrypt;