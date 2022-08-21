import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        <button onClick={()=>handleClick()} className={`bg-white text-yellow-700 uppercase py-2 px-4 rounded-xl font-semibold 
            cursor-pointer border-2 border-yellow-700 hover:bg-yellow-700 hover:text-white 
            transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""} `}
        >
            Back
        </button>
        { }
        <button onClick={()=>handleClick("next")} className='bg-yellow-700 text-white uppercase py-2 px-4 rounded-xl font-semibold 
            cursor-pointer hover:bg-yellow-700 hover:text-white 
            transition duration-200 ease-in-out'
        >
            {currentStep === steps.length -1 ? "Confirm" : "Next"}
        </button>
    </div>
  )
}

export default StepperControl;
