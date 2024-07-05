import React from 'react'

import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition-es'

const Speech = () => {


   const startlistening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' }) 
   const stoplistening = ()=> SpeechRecognition.stopListening() 
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({})
    if (!browserSupportsSpeechRecognition) {
        return null
      }
    
  return (
    <div className=''>
      <h1 className='text-center'>Speech To Text Converter</h1>
      <p>this is a simple speech to text converter app build using react.</p>
      <div className='w-full h-20 border-2'>{transcript}fjlasfjsl</div>
      <div>
        <button className='px-6 py-2 bg-orange-400 m-1 text-white rounded-xl'>copy</button>
        <button className='px-6 py-2 bg-orange-400 m-1 text-white rounded-xl' onClick={startlistening}>Start listening</button>
        <button className='px-6 py-2 bg-orange-400 m-1 text-white rounded-xl' onClick={stoplistening}>Stop listening</button>
        </div>
    </div>
  )
}

export default Speech
