import { useEffect, useState } from 'react'
import CoverScreen from './components/CoverScreen.jsx'
import Guess from './components/Guess.jsx'
import AfterGame from './components/AfterGame.jsx'

function App() {

  if (import.meta.hot)
    import.meta.hot.accept(() => import.meta.hot.invalidate())


  let defaultGameState = {
    step: 0,
    total_score: 0,
    guess_number: 0,
    difficulty: ""
  };

  const [gameState, setGameState] = useState(defaultGameState);

  function setGameStep(step) {
    let newGameState = {
      ...gameState,
      step: step
    }
    setGameState(newGameState)
  }

  function incrementScoreGuess(score) {
    let newGameState = {
      ...gameState,
      total_score: gameState.total_score + score,
      guess_number: gameState.guess_number + 1
    }

    setGameState(newGameState)
  }

  function incrementNbGuess() {
    let newGameState = {
      ...gameState,
      guess_number: gameState.guess_number + 1
    }

    setGameState(newGameState)
  }


  function startGame(difficulty) {
    let newGameState = {
      ...gameState,
      step: 1,
      difficulty: difficulty
    }
    setGameState(newGameState)
  }

  useEffect(() => {

    if (gameState.guess_number >= 10) {
      //End game
      setGameStep(2)
    }

  }, [gameState.guess_number]);


  return (
    <div className="h-screen bg-neutral-50 flex">
      <div className="w-full max-w-lg flex min-h-3/5 max-h-[90%] mx-auto my-auto bg-white rounded-xl shadow-lg">
        {
          gameState.step == 0 && 
          <CoverScreen onGameStart={(difficulty) => startGame(difficulty)} ></CoverScreen>
        }
        {
          gameState.step == 1 && 
          <Guess 
            gameState={gameState}
            onTotalScoreChange={incrementScoreGuess} onNbGuessChange={incrementNbGuess}
          />
        }
        {
          gameState.step == 2 && 
          <AfterGame gameState={gameState} onStepChange={() => setGameStep(0)} />
        }
      </div>
    </div>
  )
}

export default App
