function censoredWords(sentence, keyWord) {
    let censoredWord = sentence;
    while (censoredWord.includes(keyWord)){
        censoredWord = censoredWord.replace(keyWord, '*'.repeat(keyWord.length))
    }
    console.log(censoredWord);
}
censoredWords("A small sentence with small some words", "small");
censoredWords("Find the hidden word", "hidden");
