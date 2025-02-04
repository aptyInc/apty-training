function arrayToSentence(words) {
    let str = words.join(' ');
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
  }

  function convertToSentence() {
    const input = document.getElementById('wordsInput').value;
    
    const words = input.split(' ').filter(word => word.trim() !== '');
    
    const str = arrayToSentence(words);
    
    document.getElementById('result').innerText = str;
  }