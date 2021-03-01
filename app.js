const hangmanElement = document.querySelector('#hangman')
const guessesElement = document.querySelector('#guesses-count')
const guessedLettersElement = document.querySelector('#guessed-letters')

let hangmanNewGame

window.addEventListener('keypress', (e) => {
  const guess = e.key
  hangmanNewGame.makeGuess(guess)
  render()
})


const render = () => {
  hangmanElement.innerHTML = ''
  const letters = hangmanNewGame.puzzle.split('')
  letters.forEach((letter) => {
    const spanTag = document.createElement('span')
    spanTag.textContent = letter
    hangmanElement.appendChild(spanTag)
  })
  guessedLettersElement.innerHTML = hangmanNewGame.guessedLettersList
  guessesElement.innerHTML = hangmanNewGame.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle(2)
  hangmanNewGame = new Hangman(puzzle.puzzle, 5);
  render()
}
const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', ()=>{ 
  resetBtn.classList.add('buttonClicked')
  startGame()
  setTimeout(()=>{resetBtn.classList.remove('buttonClicked')},300)
})

startGame()

// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((err) =>{
//   console.log(err)
// })

// getLocation().then((location) => {
//   city = location.city
//   region = location.region
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(`You are currently in ${city}/${region}/${country.name}`)
//   console.log(country)
// }).catch((err) => {
//   console.log(err)
// })