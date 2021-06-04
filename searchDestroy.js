function searchDestroy(str, word, newWord) {
    return str.replace(word, newWord)
}

console.log(searchDestroy('We are going to the park!', 'park', 'beach')); // --> we are going to the beach!