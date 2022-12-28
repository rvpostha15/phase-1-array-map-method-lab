const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(string) { //a function for each string in tutorials array
    return string.split(' ').map(function(word) { //splitting each string up by each word (creating an array of words for each string)
      return (word.charAt(0).toUpperCase() + word.slice(1)); //for each word we are capitalizing the first letter (.charAt(0)) and attaching (.slice) all the characters with the second letter(slice(1)) 
    }).join(' '); // we are joining our new capitalized words together => our word array is turning back into a string
  })
}
titleCased(tutorials) // we have to call our function so it actually does something