
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var uppercase = 'HELLO'
  uppercase.toUpperCase() === uppercase // true
  console.log(uppercase)
}

function logWhisper(string) {
  var lowercase = 'hello'
  lowercase.toLowerCase() === lowercase // true
  console.log(lowercase)
}

function sayHiToGrandma(string) {


  var mixedCase = 'I love you, Grandma.'
  mixedCase.toLowerCase() === mixedCase // false
  mixedCase.toUpperCase() === mixedCase // false
  console.log("I love you, too.")

}
