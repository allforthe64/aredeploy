import React, { useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router'

const OrderCard = ({id, fName, lName, boat, email, phone, region, deleteOrder, setFetched}) => {
    const orderId = id
    const [edit, setEdit] = useState(false)
    const [editFName, setEditFName] = useState(fName)
    const [editLName, setEditLName] = useState(lName)
    const [editEmail, setEditEmail] = useState(email)
    const [editBoat, setEditBoat] = useState(boat)
    const [editPhone, setEditPhone] = useState(phone)
    const [editRegion, setEditRegion] = useState(region)


    const axiosPrivate = useAxiosPrivate()

    let content

    const navigate = useNavigate()

    const handleChange = (e, target) => {
        target === 'fName' ? setEditFName(e.target.value) : target === 'lName' ? setEditLName(e.target.value) : target === 'email' ? setEditEmail(e.target.value) : target === 'phone' ? setEditPhone(e.target.value) : false
    }

    const handleSelectBoat = (boat) => {
        setEditBoat(boat)
    }

    const handleSelectRegion = (region) => {
        console.log(region)
        setEditRegion(region)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(id)
        console.log(editFName)
        console.log(editLName)
        console.log(editBoat)
        console.log(editEmail)
        console.log(editPhone)
        console.log(editRegion)

        try {
            // Axios response is in JSON
            const response = await axiosPrivate.patch('/order', 
                JSON.stringify({ id, editFName, editLName, editBoat, editEmail, editPhone, editRegion }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response?.data)
            alert(`updated order: ${id}`)
            setFetched(prev => !prev)
            navigate('/admin')
        } catch (err) {
            console.log('throwing error in edit order form')
            if (!err?.response) {
                console.log(err)
                console.log('No Server Response')
            } else {
                console.log('Goal update Failed')
            }
        }
    }


    if (!edit) {
        content = (
            <div className='bg-white border-2 border-black rounded-2xl w-11/12 py-8'>
                <div className='flex justify-around w-10/12'>
                    <p className='heading grey text-xl '>Order Id: {id}</p>
                    <p className='heading grey text-lg'>First Name: {fName}</p>
                    <p className='heading grey text-lg'>Last Name: {lName}</p>
                </div>
                <div className='pl-[1.5%] pt-8 flex justify-around w-7/12'>
                    <p className='heading grey text-base text-left'>Boat Type: {boat}</p>
                    <p className='heading grey text-base text-left'>Customer Email: {email}</p>

                </div>
                <div className='pl-[3%] pt-8 flex w-6/12'>
                    <p className='heading grey text-base text-left'>Customer Phone: {phone}</p>
                    <p className='heading grey text-base text-left pl-[10%]'>Customer Region: {region}</p>
                </div>
                <div className='pl-[3%] pt-4 flex w-6/12 heading'>
                    <button className='text text-sm orange orange-border mt-4 px-6 rounded-lg orange-button transition-color ease-in-out duration-200' onClick={() => setEdit(true)}>Edit Order</button>
                    <button className='ml-[4%] text text-sm border-[3px] border-red-600 hover:bg-red-600 hover:text-white text-red-600 mt-4 px-6 rounded-lg transition-color ease-in-out duration-200' onClick={() => deleteOrder(orderId)}>Delete Order</button>
                </div>
            </div>
  
        )
    } else {
        content = (
            <div className='bg-white border-2 border-black rounded-2xl w-11/12 py-8'>
                <div className='flex justify-around w-10/12'>
                    {/* <p className='heading grey text-xl '>Order Id: {id}</p> */}
                    <div className='flex flex-col items-start'>
                        <label className='heading grey mb-2'>First Name</label>
                        <input className='heading grey text-lg border-b bg-transparent border-black text-xl pl-2 py-px focus:outline-none focus:bg-white' placeholder='First Name' value={editFName} onChange={(e) => handleChange(e, 'fName')}/>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='heading grey mb-2'>Last Name</label>
                        <input className='heading grey text-lg border-b bg-transparent border-black text-xl pl-2 py-px focus:outline-none focus:bg-white' placeholder='Last Name' value={editLName} onChange={(e) => handleChange(e, 'lName')}/>
                    </div>
                </div>
                <div className='pl-[1.5%] pt-8 flex justify-around w-10/12'>
                    <div className='w-[45%] flex flex-col items-start'>
                        <label className='mb-2 heading grey'>Boat Type</label>
                        <select id='boatType' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white grey order-select' onChange={(e) => handleSelectBoat(e.target.value)} value={editBoat} required>
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
                    <div className='flex flex-col items-start'>
                        <label className='heading grey mb-2'>Email</label>
                        <input className='heading grey text-lg border-b bg-transparent border-black text-xl pl-2 py-px focus:outline-none focus:bg-white' placeholder='Email' value={editEmail} onChange={(e) => handleChange(e, 'email')}/>
                    </div>
                </div>
                <div className='pl-[3%] pt-8 flex w-10/12 justify-around'>
                    <div className='flex flex-col items-start'>
                        <label className='heading grey mb-2'>Phone</label>
                        <input className='heading grey text-lg border-b bg-transparent border-black text-xl pl-2 py-px focus:outline-none focus:bg-white' placeholder='Phone' value={editPhone} onChange={(e) => handleChange(e, 'phone')}/>
                    </div>
                    <div className='w-[45%] flex flex-col items-start'>
                        <label className='mb-2 heading grey'>Region</label>
                        <select id='boatType' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white grey order-select' onChange={(e) => handleSelectRegion(e.target.value)} value={editRegion} required>
                            <option>United States</option>
                            <option>Hawaii</option>
                            <option>Canada</option>
                            <option>Tahiti</option>
                            <option>Pacific Islands</option>
                            <option>Australia</option>
                        </select>
                    </div>
                </div>
                <div className='pl-[3%] pt-4 flex w-6/12 heading'>
                    <button className='text text-sm orange orange-border mt-4 px-6 rounded-lg orange-button transition-color ease-in-out duration-200' onClick={(e) => {
                        handleSubmit(e)
                        setEdit(false)
                        }}>Save Changes</button>
                    <button className='ml-[4%] text text-sm border-[3px] border-red-600 hover:bg-red-600 hover:text-white text-red-600 mt-4 px-6 rounded-lg transition-color ease-in-out duration-200' onClick={() => deleteOrder(orderId)}>Delete Order</button>
                </div>
            </div>
        )
    }

    console.log(editFName)

  return (
    [content]
  )
}

export default OrderCard