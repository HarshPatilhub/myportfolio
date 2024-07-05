import React from 'react';
import question from '../constants/question.json';

const Result = ({ userAnswer, question, resetQuiz }) => {
    // Ensure userAnswer is an array before using filter
    let correctAnswer = userAnswer.filter((answer)=> answer).length
    return (
        <div className='mt-10'>
            <h1 className='text-2xl'>Your Result is:</h1>
            <p>You answered {correctAnswer} out of {question.length} questions</p>
            <span className='text-red-700 text-xl cursor-pointer' onClick={resetQuiz}>Click Here to Retry</span>
            <ul>
                {
                    question.map((question,index)=>(
                        <li  className={`${(userAnswer[index]) ? 'text-green-500' : 'text-red-500' }`} key={index}>Q{index + 1}.{" "}{question.question}</li>
                    ))   
                }
            </ul>
        </div>
    );
};

export default Result;
