import React from 'react'
import question from '../constants/question.json'

const Question = ({question , onAnswerClick}) => {
  return (
    <div className=''>
      <h2 className='text-4xl'>{question.question}</h2>
      <ul className='w-full flex justify-center items-center flex-wrap'>
        {
            question.answerOptions.map((option,index)=> (
                <li className='' key={index}>
                    <button className='bg-zinc-500 rounded-xl text-white p-3 m-2' onClick={()=> onAnswerClick(option.isCorrect)}>{option.text}</button>
                </li>
            ))
        }
      </ul>
    </div>

  )
}

export default Question
