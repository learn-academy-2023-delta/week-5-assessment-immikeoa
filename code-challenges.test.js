// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
        describe("codedMessage", () => {
            it("takes in a string and returns a string with a coded messages", () => {
                
                const secretCodeWord1 = "Lackadaisical"
                // Expected output: "L4ck4d41s1c4l"
                const secretCodeWord2 = "Gobbledygook"
                // Expected output: "G0bbl3dyg00k"
                const secretCodeWord3 = "Eccentric"
                // Expected output: "3cc3ntr1c"
                
                expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
                expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
                expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
            })
        })

// b) Create the function that makes the test pass.
const codedMessage = (str) =>{
    const vowels = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0'
    };
  
    let codedString =""
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (vowels.hasOwnProperty(char)) {
        codedString += vowels[char];
      } else {
        codedString += char;
      }
    }
  
    return codedString;
  }
  

// Pseudo code:
// create a  function named codedMessages that will take a string
// inside the funtion create an object with the vowels as key and the return number as value
// create a variable namedcodedString that will hold an empty string as a placeholder for the string being return.
//create a for loop that will iterate throught the passed in string
// use and if else statement to replace each vowel with the corresponding number assigned in the vowels obeject vowels by checking if the current index  lowercased matches a key in the vowels object replace it.
// return the new string


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
        describe("wordsWithLetter", () => {
                it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {

                const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
                const filterLetterA = "a"
                const filterLetterE = "e"
                
                expect(wordsWithLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
                expect(wordsWithLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
            })
        })

// b) Create the function that makes the test pass.
const wordsWithLetter = (words, letter) => {
    const wordsWithLetter = [];
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      if (word.includes(letter)) {
        wordsWithLetter.push(word);
      }
    }
    
    return wordsWithLetter;
  }

// Pseudo code:
// create function named wordsWithLetter it takes two arguments and array and a letter
// inside the function create an array to hold the return
// create a for loop to iterate throught the array 
// create and if statement that will push the word into the new array if it contains the given letter
// return the new array
  

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
        describe("isFullHouse", () => {
            it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
                
                const hand1 = [5, 5, 5, 3, 3]
                
                const hand2 = [5, 5, 3, 3, 4]
                
                const hand3 = [5, 5, 5, 5, 4]
                
                const hand4 = [7, 2, 7, 2, 7]
                
            expect(isFullHouse(hand1)).toEqual(true)
            expect(isFullHouse(hand2)).toEqual(false)
            expect(isFullHouse(hand3)).toEqual(false)
            expect(isFullHouse(hand4)).toEqual(true)
          
        })
        })

        // b) Create the function that makes the test pass.
const isFullHouse = (numbers) => {
    const countMap = {};
  
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      countMap[number] = (countMap[number] || 0) + 1;
    }
  
    const counts = Object.values(countMap);
  
    return counts.length === 2 && (counts.includes(2) || counts.includes(3));
  }
  

// Pseudo code:
// Create an empty object to store the count of each number in the array.
// Iterate over each number in the array and increment its count in the object.
// Get an array of the count values from the object.
// If the length of the count array is 2 and it contains either a count of 2 or 3, return true (indicating a full house).
// Otherwise, return false (indicating it's not a full house).