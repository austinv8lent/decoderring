// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    let encoder = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    };

    let message = input.toLowerCase().split(''); 
    let messageNoSpaces = message.filter(nums => nums != ' '); 
    if(encode == false){ 
      let decodeResult = '';
      if(messageNoSpaces.length % 2 != 0) return false; 
      for(let index = 0; index < message.length; index += 2){
      
        if(message[index] == ' '){ 
          decodeResult += ' ';
          index--;
        }else{ decodeResult += encoder[message[index + 1]][message[index]]; } 
      }
      return decodeResult;
    }else{ 
      let buildEncryption = [];
      for(let letter of message){ 
        if(letter == ' '){ buildEncryption.push(' '); } 
        for(let c = 1; c < 6; c++){ 
          for(let i = 1; i < 6; i++){ 
            if(encoder[c][i].includes(letter)){
              buildEncryption.push(i);
              buildEncryption.push(c);
            }
          }
        }
      }
      return buildEncryption.join('');
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };