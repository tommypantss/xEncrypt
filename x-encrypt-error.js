// x-encrypt-error.js
class XEncryptError extends Error {
    constructor(message) {
      super(message);
      this.name = "XEncryptError";
    }
  }
  
  class InvalidAlgorithmError extends XEncryptError {
    constructor(message) {
      super(message || "Invalid encryption algorithm specified");
      this.name = "InvalidAlgorithmError";
    }
  }
  
  class MissingPasswordError extends XEncryptError {
    constructor(message) {
      super(message || "Password is required for key generation");
      this.name = "MissingPasswordError";
    }
  }
  
  module.exports = { XEncryptError, InvalidAlgorithmError, MissingPasswordError };  