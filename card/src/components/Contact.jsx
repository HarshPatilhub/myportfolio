import React, { useState } from 'react';
import Header from './Header';
import useTheme from '../contexts/Theme';
import Cursor from './Cursor';
import { useCursor } from '../contexts/Cursor';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { themeMode } = useTheme();
  const { setShowCursor } = useCursor();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullname('');
    setEmail('');
    setMessage('');
    toast.success("Message Sent Successfully!")
  };

 

  return (
    <div id='contact'>
      <div className='my-12 md:my-24 py-5'>
        <div
          className={`text-center text-3xl md:text-4xl ${
            themeMode === 'bg-black' ? 'text-white' : 'text-black'
          }`}
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
        >
          <Cursor />
          CONTACT ME
        </div>
      </div>
      <div className='w-full md:w-3/4 mx-auto flex flex-col md:flex-row justify-center items-center'>
        <div className='img w-full md:w-2/5 md:mr-8'>
          <img src='/images.png' alt='' className='w-full md:w-80 rounded-xl' />
        </div>
        <div className='w-full md:w-3/5'>
          <form onSubmit={handleSubmit} className='px-4 md:px-0'>
            <h1 className={`text-xl md:text-2xl ${themeMode === 'bg-black' ? 'text-white' : 'text-black'}`}>
              Get In Touch
            </h1>
            <p className='text-zinc-400 text-base md:text-lg'>
              My inbox is always open. Whether you have a question or just want to say hello, I
              will try my best to get back to you!
            </p>
            <input
              type='text'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder='FullName*'
              required
              className={`w-full p-3 m-2 rounded-xl ${
                themeMode === 'bg-black' ? 'text-white bg-gray-800' : 'text-black bg-zinc-200'
              }`}
            />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email*'
              required
              className={`w-full p-3 m-2 rounded-xl ${
                themeMode === 'bg-black' ? 'text-white bg-gray-800' : 'text-black bg-zinc-200'
              }`}
            />
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message*'
              required
              className={`w-full p-3 m-2 rounded-xl ${
                themeMode === 'bg-black' ? 'text-white bg-gray-800' : 'text-black bg-zinc-200'
              }`}
            />
            <div className='w-full flex justify-end'>
              <button type='submit' className='bg-violet-700 text-white px-6 md:px-8 py-3 rounded-xl'>
                Say Hello
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
