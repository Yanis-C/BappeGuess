import { useState } from 'react'

function CoverScreen({ onGameStart }) {

  const [step, setStep] = useState(1);

  function startGame(difficulty) {
    onGameStart(difficulty)
  }

  return (
    <>
      {
        step == 1 && (
        <div className='flex flex-col justify-around p-6'>
          <span className="text-xl text-black font-medium mx-auto">BappeGuessr</span>
          <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ex, iusto perspiciatis temporibus et in earum expedita. Neque esse saepe illum a quaerat beatae exercitationem, delectus labore necessitatibus? Nostrum, odio!</p>
          <button onClick={() => setStep(2)} className="w-1/2 mx-auto my-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 transition-colors hover:text-white hover:bg-purple-600 hover:border-transparent ">Démarrer la partie</button>
        </div>
        )
      }
      {
        step == 2 && (
        <div className='flex flex-col justify-between p-6 py-12 w-full'>
          <div className='flex flex-col items-center'>
            <button onClick={() => startGame("easy")} className="w-3/4 mx-auto my-2 px-2 py-2 text-sm text-green-500 font-semibold rounded-full border-2 border-green-200 transition-colors hover:text-white hover:bg-green-500 hover:border-transparent">
              Easy
            </button>
            <span className='text-sm text-gray-500'>200 most expensive players historically</span>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => startGame("medium")} className="w-3/4 mx-auto my-2 px-2 py-2 text-sm text-amber-500 font-semibold rounded-full border-2 border-amber-200 transition-colors hover:text-white hover:bg-amber-500 hover:border-transparent">
              Medium
            </button>
            <span className='text-sm text-gray-500'>500 most expensive players currently</span>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => startGame("hard")} className="w-3/4 mx-auto my-2 px-2 py-2 text-sm text-red-600 font-semibold rounded-full border-2 border-red-200 transition-colors hover:text-white hover:bg-red-600 hover:border-transparent">
              Hard
            </button>
            <span className='text-sm text-gray-500'>Players from the top 5 leagues</span>
          </div>
        </div>
        )
      }
    </>
  )
}

export default CoverScreen;
