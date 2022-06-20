// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  
  let actualAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryption = {};

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    let uniqueCheck = new Set(alphabet);
    if (actualAlphabet.length !== [...uniqueCheck].length) return false;
    alphabet.split('');
    if (encode) {
      for (let i = 0; i < 25; i++) {
        encryption[actualAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 25; i++) {
        encryption[alphabet[i]] = actualAlphabet[i];
      }
    }
    let result = input
      .toLowerCase()
      .split('')
      .map((letter) => {
        if (letter == ' ') return ' ';
        return encryption[letter];
      });
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };