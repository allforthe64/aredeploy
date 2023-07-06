import React, { useState, useEffect, useRef } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const ContactForm = () => {

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [region, setRegion] = useState('')
    const [message, setMessage] = useState('')
    const [validEmail, setValidEmail] = useState()
    const [validPhone, setValidPhone] = useState()

    const navigate = useNavigate()

    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        const phone_result = PHONE_REGEX.test(phone)
        setValidEmail(result)
        setValidPhone(phone_result)
    })

    const handleChange = (e, targetField) => {
        targetField === 'fName' ? setFName(e.target.value) : targetField === 'lName' ? setLName(e.target.value) :
        targetField === 'email' ? setEmail(e.target.value) : targetField === 'phone' ? setPhone(e.target.value) 
        : targetField === 'message' ? setMessage(e.target.value) : false
    }

    const handleSelect = (e) => {
        e.target.value === 'Select One...' ? false : setRegion(e.target.value)
    }

    const handleSelectBoat = (e) => {
        e.target.value === 'Select One...' ? false : setBoat(e.target.value)
    }

    const form = useRef();


    const sendEmail = async (e) => {
        e.preventDefault()

        console.log(import.meta.env.VITE_REACT_EMAILJS_PUBLIC_KEY)

        emailjs.sendForm(import.meta.env.VITE_REACT_EMAILJS_SERVICE_KEY, import.meta.env.VITE_REACT_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_REACT_EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        
        form.current.reset()

        setFName('')
        setLName('')
        setEmail('')
        setPhone('')
        setRegion('')
        setValidEmail(null)
        setValidPhone(null)
        
        navigate('/thank-you')

        e.target.reset()
    }

  return (
    <div className='flex flex-col items-center py-20 max-lg:py-10'>
            <p className='heading grey text-6xl mb-14 sm:max-md:text-4xl max-sm:text-3xl max-md:mb-8'>Contact A Rep</p>
            <form onSubmit={sendEmail} className='bg-neutral-200 border-2 border-black rounded-2xl w-[80%] py-10 flex flex-col items-center px-[2%]' ref={form}>
                <div className='w-[90%] flex flex-col items-start mb-4'>
                    <label htmlFor='region' className='text-2xl mb-3 heading grey max-sm:text-lg'>Select a region:</label>
                    <select id='region' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white grey order-select' onChange={(e) => handleSelect(e)} value={region} required name='to_email'>
                        <option>Select One...</option>
                        <option value={'sales@aretahiti.com'}>United States</option>
                        <option value={'sales@aretahiti.com'}>Hawaii</option>
                        <option value={'sales@aretahiti.com'}>California</option>
                        <option value={'arislan77@gmail.com'}>Canada</option>
                        <option value={'arislan77@gmail.com'}>Tahiti</option>
                        <option value={'arislan77@gmail.com'}>Pacific Islands</option>
                        <option value={'arislan77@gmail.com'}>Australia</option>
                    </select>
                </div>
                <div className='flex justify-around w-full mb-4 max-md:flex-col '>
                    <div className='w-[40%] flex flex-col items-start max-md:w-[90%] max-md:pl-[6%]'>
                        <label htmlFor='fName' className='text-2xl mb-3 heading grey max-sm:text-lg'>Enter First Name:</label>
                        <input onChange={(e) => handleChange(e, 'fName')} id='fName' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white' placeholder='First Name' required name='from_name'/>
                    </div>
                    <div className='w-[40%] flex flex-col items-start max-md:w-[90%] max-md:pl-[6%]'>
                        <label htmlFor='fName' className='text-2xl mb-3 heading grey max-sm:text-lg'>Enter Last Name:</label>
                        <input onChange={(e) => handleChange(e, 'lName')} className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white' placeholder='Last Name' required name='from_name'/>
                    </div>
                </div>
                <div className='w-[90%] mb-4'>
                    <div className='w-full flex flex-col items-start'>
                        <label htmlFor='email' className='text-2xl mb-3 heading grey max-sm:text-lg'>Enter Email:</label>
                        <input id='email' className='border-b bg-transparent border-black text-xl mb-2 pl-2 py-px focus:outline-none focus:bg-white w-full' placeholder='Email' onChange={(e) => handleChange(e, 'email')} required name='from_email'/>
                        <p className={!validEmail && email.length > 0 ? 'block text-red-600 text-left text-2xl' : 'hidden'}>*Please Enter Valid Email*</p>
                    </div>
                </div>
                <div className='w-[90%] mb-4'>
                    <div className='w-full flex flex-col items-start'>
                        <label htmlFor='email' className='text-2xl mb-3 heading grey max-sm:text-lg'>Enter Phone:</label>
                        <input id='email' className='border-b bg-transparent border-black text-xl mb-2 pl-2 py-px focus:outline-none focus:bg-white w-full' placeholder='Phone' onChange={(e) => handleChange(e, 'phone')} required name='from_phone'/>
                        <p className={!validPhone && phone.length > 0 ? 'block text-red-600 text-left text-2xl' : 'hidden'}>*Please Enter Valid Phone*</p>
                    </div>
                </div>
                <div className='w-[90%] mb-10 flex flex-col items-start'>
                    <label className='grey heading text-2xl mb-3 max-sm:text-lg'>Message:</label>
                    <textarea className='w-full p-2 border rounded-xl bg-transparent border-black text-xl w-full mb-10 pl-2 py-2 focus:outline-none focus:bg-white' rows={10} name='message' onChange={(e) => handleChange(e, 'message')}/>
                </div>
                <button className={validEmail && fName.length > 0 && lName.length > 0 && region.length > 0 && message.length > 0 ? 'orange-background orange-bg-button orange-border text-white rounded-3xl max-md:text-lg max-md:px-10 headings text-3xl px-16 py-2 transition-color duration-200 ease-in-out' : 'orange-background orange-bg-button orange-border text-white rounded-3xl max-md:text-lg max-md:px-10 headings text-3xl px-16 py-2 opacity-50'} disabled={validEmail && validPhone ? false : true}>Submit</button>
            </form>
        </div>
  )
}

export default ContactForm