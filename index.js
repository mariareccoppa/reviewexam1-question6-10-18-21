let enteredWords = prompt("Please type two words separated with a space");
let spacePosition = enteredWords .indexOf(" ")
let firstWord = enteredWords .substring(0, 1 + spacePosition)
let lastWord = enteredWords .substring(spacePosition, enteredWords.length)
let firstLetter = firstWord .charAt(0)
let lastLetter = firstWord .substring(spacePosition - 1)
let finalfirstWord = firstWord .substring(1, spacePosition-1) 
console.log (lastLetter+finalfirstWord+firstLetter+lastWord)