import React from 'react';

function Contact() {
    return (
        <div className='justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-center my-20'>
                <div className='md:w-7/12'>
                    <span className='block text-4xl font-bold'>Contact</span>
                    <span className='block text-base font-bold'>Connect for business inquiries.</span>
                </div>
            </div>
            <div className='flex justify-center items-center'> 
                <form 
                    action='https://getform.io/f/fab5aa08-5913-469b-a9c6-48e225c8b065' 
                    method='POST'
                    className='flex flex-col w-full md:w-7/12'
                >
                    <input
                        type='text'
                        name='name'
                        placeholder='First and Last Name'
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        required
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email Address'
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        required
                    />
                    <textarea
                        name='message'
                        placeholder='Message'
                        rows='10'
                        className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
                        required
                    />
                    <button
                        type='submit'
                        className='text-center justify-center items-center inline-block px-8 py-3 w-auto text-base font-md rounded-md text-white bg-stone-900'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;