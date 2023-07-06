import React, { useState, useEffect } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const CustomOrder = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const axiosPrivate = useAxiosPrivate()

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [region, setRegion] = useState('')
    const [boat, setBoat] = useState('Marara V1 Pro Carbon')
    const [validEmail, setValidEmail] = useState()
    const [validPhone, setValidPhone] = useState()

    const boatImgs = {
        'Marara V1 Pro Carbon': 'marara_1.JPG',
        'Marara V1 Hybrid Carbon': 'marara_5.jpg',
        'Mako V1 Pro Carbon': 'mako_1.jpg',
        'Mako V1 Hybrid Carbon': 'mako_2.jpg',
        'Mana OC1 Pro Carbon': 'mana_1.JPG',
        'Mana OC1 Hybrid Carbon': 'mana_11.jpg',
        'Matahina V6 Carbon Iakos/Carbon Ama': 'matahina_11.jpg',
        'Matahina V6 Wood Iakos/Fiberglass Ama': 'matahina_1.png'
    }

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        setValidEmail(result)
    })

    useEffect(() => {
        const result = PHONE_REGEX.test(phone)
        setValidPhone(result)
    })

    const handleChange = (e, targetField) => {
        targetField === 'fName' ? setFName(e.target.value) : targetField === 'lName' ? setLName(e.target.value) :
        targetField === 'email' ? setEmail(e.target.value) : targetField === 'phone' ? setPhone(e.target.value) : false
    }

    const handleSelect = (e) => {
        e.target.value === 'Select One...' ? false : setRegion(e.target.value)
    }

    const handleSelectBoat = (e) => {
        e.target.value === 'Select One...' ? false : setBoat(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        //validate data
        const validEmail = EMAIL_REGEX.test(email)
        const validPhone = PHONE_REGEX.test(phone)
        
        if (!validEmail || !validPhone) {
            return false
        }

        try {
            const response = await axiosPrivate.post('/order', 
                JSON.stringify({fName, lName, email, phone, 'boatType': boat, region}),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            )

            console.log(response?.data)
            console.log(JSON.stringify(response))

            setBoat('')
            setFName('')
            setLName('')
            setEmail('')
            setPhone('')
            setRegion('')
            setValidEmail(null)
            setValidPhone(null)
            
            e.target.reset()
        } catch (err) {
            console.log(err)
        }
    }

    console.log(boat)

  return (
    <div className='py-20 flex flex-col items-center'>
        <h1 className='heading text-8xl grey mb-10'>Place a custom order</h1>
        <form onSubmit={handleSubmit} className='bg-neutral-200 border-2 border-black rounded-2xl w-[80%] py-10 flex flex-col items-center px-[2%]'>
            <div className='w-full flex justify-between mb-10 items-end'>
                <div className='w-[45%] flex flex-col items-start'>
                    <label className='text-2xl mb-3 heading grey'>Please Select A Boat Type</label>
                    <select id='boatType' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white grey order-select' onChange={(e) => handleSelectBoat(e)} value={boat} required>
                            <option selected>Marara V1 Pro Carbon</option>
                            <option>Marara V1 Hybrid Carbon</option>
                            <option>Mako V1 Pro Carbon</option>
                            <option>Mako V1 Hybrid Carbon</option>
                            <option>Mana OC1 Pro Carbon</option>
                            <option>Mana OC1 Hybrid Carbon</option>
                            <option>Matahina V6 Carbon Iakos/Carbon Ama</option>
                            <option>Matahina V6 Wood Iakos/Fiberglass Ama</option>
                        </select>
                </div>
                <div className='w-[40%] h-[250px]' style={{backgroundImage: `url(${boatImgs[`${boat}`]})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
{/*                     <img src={boatImgs[`${boat}`]} className='h-full'/> */}
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='w-[40%] flex flex-col items-start'>
                    <label htmlFor='fName' className='text-2xl mb-3 heading grey'>Enter First Name:</label>
                    <input onChange={(e) => handleChange(e, 'fName')} id='fName' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white' placeholder='First Name' required/>
                </div>
                <div className='w-[40%] flex flex-col items-start'>
                    <label htmlFor='fName' className='text-2xl mb-3 heading grey'>Enter Last Name:</label>
                    <input onChange={(e) => handleChange(e, 'lName')} className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white' placeholder='Last Name' required/>
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='w-[50%] flex flex-col items-start'>
                    <label htmlFor='email' className='text-2xl mb-3 heading grey'>Enter Email:</label>
                    <input id='email' className='border-b bg-transparent border-black text-xl mb-10 pl-2 py-px focus:outline-none focus:bg-white w-full' placeholder='Email' onChange={(e) => handleChange(e, 'email')} required/>
                </div>
                <p className={!validEmail && email.length > 0 ? 'block text-red-600 w-[40%] pt-12 text-left text-2xl' : 'hidden'}>*Please Enter Valid Email*</p>
            </div>
            <div className='w-full flex justify-between'>
                <div className='w-[40%] flex flex-col items-start'>
                    <label htmlFor='phone' className='text-2xl mb-3 heading grey'>Enter A Phone Number:</label>
                    <input onChange={(e) => handleChange(e, 'phone')} id='phone' className={!validPhone ? 'border-b bg-transparent border-black text-xl w-full mb-2 pl-2 py-px focus:outline-none focus:bg-white' : 'border-b bg-transparent border-black text-xl w-full mb-2 pl-2 py-px focus:outline-none focus:bg-white mb-[76px]'} placeholder='Phone' required/>
                    <p className={!validPhone && phone.length > 0 ? 'block w-full text-red-600 w-[40%] text-left text-xl mb-10' : 'hidden'}>*Please Enter Valid Phone Number*</p>
                </div> 
                <div className='w-[40%] flex flex-col items-start'>
                    <label htmlFor='region' className='text-2xl mb-3 heading grey'>Select a region:</label>
                    <select id='region' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white grey order-select' onChange={(e) => handleSelect(e)} value={region} required>
                        <option>Select One...</option>
                        <option>United States</option>
                        <option>Hawaii</option>
                        <option>Canada</option>
                        <option>Tahiti</option>
                        <option>Pacific Islands</option>
                        <option>Australia</option>
                    </select>
                </div>
            </div>
            <button className={validEmail && boat.length > 0 && fName.length > 0 && lName.length > 0 && region.length > 0 ? 'orange-background orange-bg-button orange-border text-white rounded-3xl headings text-3xl px-16 py-2 transition-color duration-200 ease-in-out mt-10' : 'orange-background orange-bg-button orange-border text-white rounded-3xl headings text-3xl px-16 py-2 opacity-50'} disabled={validEmail ? false : true}>Order Now</button>
        </form>
    </div>
  )
}

export default CustomOrder