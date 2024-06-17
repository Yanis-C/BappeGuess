import { useState } from 'react'

function AfterGame({ gameState, onStepChange }) {

  return (
    <div className='flex flex-col justify-around items-center p-6 w-full'>
      <span>Score total : {gameState.total_score} / 100</span>
      <button className="w-1/2 mx-auto my-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent">Retour au menu</button>
    </div>
  )
}

export default AfterGame;
