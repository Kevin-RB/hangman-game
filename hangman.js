class Hangman {
  constructor(word, atempts) {
    this.word = word.toLowerCase().split("");
    this.atempts = atempts;
    this.guessedLetters = [];
    this.status = 'playing'
  }
  calculateStatus() {
    let check = this.word.every((letter)=> this.guessedLetters.includes(letter) || letter ===' ')

    if (this.atempts === 0) {
      return this.status = 'failed'
    } else if (check) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
  get guessedLettersList() {
    return `Guessed letters (${this.guessedLetters.join(', ')})`
  }
  get puzzle() {
    let guess = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        guess += letter;
      } else {
        guess += "*";
      }
    });
    return guess;
  }
  wordOrSentence() {
    let isSentence = false
    this.word.forEach((letter) => {
      if (letter === ' ') {
        isSentence = true
      }
    })
    if (isSentence) {
      return 'sentence'
    } else {
      return 'word'
    }
  }
   get statusMessage() {
    if (this.status === 'playing') {
      return `Guesses left ${this.atempts}.`
    } else if (this.status === 'failed') {
      return `Nice try! the ${this.wordOrSentence()} was "${this.word.join('')}".`
    } else if (this.status === 'finished') {
      return `Great work! you guessed the ${this.wordOrSentence()}.`
    }
  }
  makeGuess(guessedCharacter) {
    if (this.status !== 'playing') {
      return 'Game over'
    }
    const guess = guessedCharacter.toLowerCase();
    const charDefiner = guessedCharacter.split("").length;
    if (charDefiner !== 1) {
      return Error("please type one character");
    }

    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isBadGuess && isUnique) {
      this.atempts--;
    }
    this.calculateStatus()
  }
}