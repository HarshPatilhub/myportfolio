import React, { useState } from 'react'
import Todo from './components/Todo'
import Speech from './components/Speech'

const App = () => {


 
  return (
    <div className='flex justify-center items-center h-screen w-full text-white'>

      
    </div>
  )
}

export default App



// import React, { useState } from 'react'
// import Question from './components/Question'
// import question from './constants/question.json'
// import Result from './components/Result'

// const App = () => {

//   const[currentQuestion,setCurrentQuestion] = useState(0)
//   const[userAnswer,setUserAnswer] = useState([])

//   const handleNext = (isCorrect)=>{
//     setCurrentQuestion(currentQuestion + 1)
//     setUserAnswer([...userAnswer,isCorrect])
//   }

//   const resetQuiz = ()=>{
  
//   }


//   return (
//     <div className='text-center'>
//      <h1 className='text-3xl mt-5'>Quiz App</h1>

//      {/* Question Component */}

//     {
//       currentQuestion < question.length && (
//         <Question  question={question[currentQuestion]} onAnswerClick={handleNext} />
//       )
//     }
//      {/* Result Component */}
//     {
//       currentQuestion === question.length && (
//         <Result userAnswer={userAnswer} question={question} resetQuiz={resetQuiz} />
//       )
//     }
//     </div>
//   )
// }

// export default App



