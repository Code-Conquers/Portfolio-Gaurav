import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import EarthCanvas from '../canvas/Earth';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m282yfk', 'template_qrlr9za', form.current, {
        publicKey:'tA8Q9oHLuhnAdxJVd',
      })
      .then(
        () => {
          toast.success('Email sent successfully');
          form.current.reset();
        },
        () => {
          toast.error('Email failed to send !!');
        },
      );
  };

  return (
    <div className='flex justify-center items-center h-screen overflow-auto'>
      <div className='flex flex-row justify-around w-full'>
        <div className='md:w-1/3 '>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
            <h1 className='text-5xl p-3 m-3 font-bold font-PoorStory text-[#FFF7D4]'>Contact Us</h1>
            <input type="text" name="user_name" id="user_name" placeholder='Name' className='text-xl h-16 w-full rounded-xl p-4 m-4 border-2 border-[#C9D7DD] font-IbmplexMono text-[#C9D7DD] bg-transparent' required />
            <input type="email" name="user_email" id="user_email" placeholder='Email' className='text-xl h-16 w-full rounded-xl p-4 m-4 border-2 border-[#C9D7DD] font-IbmplexMono text-[#C9D7DD] bg-transparent' required />
            <textarea name="message" id="message" placeholder='Message' className='text-xl h-16 w-full rounded-xl p-4 m-4 border-2 border-[#C9D7DD] font-IbmplexMono text-[#C9D7DD] bg-transparent' required />
            <div className="group">
              <div className="w-52 h-14 p-3 m-3 bg-[#FFF7D4] rounded-tl-3xl  rounded-br-3xl cursor-pointer text-xl text-[#122049] font-IbmplexMono font-bold flex justify-center items-center">
                <input type="submit" value="Send" className='text-xl'/>
                <div className="relative top-0 -inset-full h-full w-1/4 z-5  transform -skew-x-12 bg-gradient-to-r from-[#020103] to-transparent opacity-20 group" />
              </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
          </form>
        </div>
        <div className='hidden md:block'>
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
