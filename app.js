let blah = document.getElementById('blah');

function firstLetterOfEachWordCapitalized(e) {
  e.preventDefault();
  let sentence = document.getElementById('sentence').value;
  sentence = sentence.trim();

  let arrayOfWords = sentence.toLowerCase().split(' ');

  for (let i = 0; i < arrayOfWords.length; i++) {
    let removeFirstLetterOfEachWord = arrayOfWords[i].slice(1);
    let capitalizeTheFirstLetterOfEachWord = arrayOfWords[i][0].toUpperCase();

    arrayOfWords[i] =
      capitalizeTheFirstLetterOfEachWord + removeFirstLetterOfEachWord;
  }
  blah.innerHTML = `${arrayOfWords.join(' ')}`;
}
