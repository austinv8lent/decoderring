// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
        if (shift === 0 || shift < -25 || shift > 25 || shift === {})
        return false;
    if (encode === false) shift = shift - shift * 2;
    let lowerCaseInput = input.toLowerCase();
    let result = [...lowerCaseInput].map((letter) => {
      let indexNum = letter.charCodeAt();
      if (indexNum < 97 || indexNum > 122)
        return String.fromCharCode(indexNum);
      let shiftedNum = indexNum + shift;
      if (shiftedNum < 97) shiftedNum += 26;
      if (shiftedNum > 122) shiftedNum -= 26;
      return String.fromCharCode(shiftedNum);
    });
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };