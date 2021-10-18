let words = prompt("Please type two words separated with a space");
let spacePosition = words.indexOf(" ");
let firstWord = words.substring(1, spacePosition)
let secondWord = words.substring(spacePosition+1, words.length)
let firstLetter = words.charAt(0)
let lastLetter = words.charAt(spacePosition-1)

console.log(lastLetter,firstWord,firstLetter,secondWord)