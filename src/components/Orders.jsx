import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import OrderCard from './OrderCard'

const Orders = () => {

    const axiosPrivate = useAxiosPrivate()
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    const [fetched, setFetched] = useState(false)
    const [noFiltered, setNoFiltered] = useState(false)

    useEffect(() => {

        console.log('rendered')
        let isMounted = true
        const controller = new AbortController()

        const getOrders = async () => {
            try {
                const response = await axiosPrivate.get('/order', {
                    signal: controller.signal
                })
                console.log(response.data)
                isMounted && setOrders(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        getOrders()

        //unmount component and cancel any pending functions or requests
        return () => {
            isMounted = false
            controller.abort()
        }
    }, [fetched])

    const handleChange = (region) => {
        console.log(region)
        setNoFiltered(false)
        if (region === 'No Region') {
            setFilteredOrders([])
        } else {
            const filtered = orders.filter(el => el.region === region)
            if (filtered.length === 0) setNoFiltered(true)
            setFilteredOrders(filtered) 
        }
    }

    const deleteOrder = async (id) => {

        try {
            const response = await axiosPrivate.delete('/order', {
                headers: { 
                    'Content-Type': 'application/json' 
                },
                withCredentials: true,
                    data: {
                    id: id
                    }
                    
            })
            console.log(response?.data)
            alert(`deleted order: ${id}`)
            setFetched(prev => !prev)
        } catch (err) {
            console.log(err)
        }
        
    }

    let orderCards 
    
    if (filteredOrders.length !== 0) {
        orderCards = filteredOrders.map((order, i) => <OrderCard key={i} id={order._id} fName={order.customerFName} lName={order.customerLName} boat={order.boatType} email={order.customerEmail} phone={order.customerPhone} region={order.region} deleteOrder={deleteOrder} setFetched={setFetched}/>)
    } else {
        orderCards = orders.map((order, i) => <OrderCard key={i} id={order._id} fName={order.customerFName} lName={order.customerLName} boat={order.boatType} email={order.customerEmail} phone={order.customerPhone} region={order.region} deleteOrder={deleteOrder} setFetched={setFetched}/>)
    }
       

  return (
    <div>
        <div className='bg-neutral-200 py-10 flex flex-col items-center'>
            <h2 className='text-left w-[90%] heading grey text-6xl pl-[4%] mb-10'>Currently placed orders:</h2>
            <div className='flex flex-col items-start w-[90%] pl-[4%] mb-10'>
                <label htmlFor='region' className='text-2xl mb-3 heading grey'>Filter by region:</label>
                <select id='region' className='w-[30%] text-xl border-b bg-transparent border-black text-xl pl-2 py-px focus:outline-none focus:bg-white grey order-select' onChange={(e) => handleChange(e.target.value)}>
                    <option>No Region</option>
                    <option>United States</option>
                    <option>Hawaii</option>
                    <option>Canada</option>
                    <option>Tahiti</option>
                    <option>Pacific Islands</option>
                    <option>Australia</option>
                </select>
            </div>
            <div className='flex flex-col items-center h-[50vh] w-[90%] border-b-2 border-black space-y-6 overflow-auto py-4'>
                {!noFiltered ? (
                    [orderCards]
                )
                : <p className='heading grey text-4xl'>No Orders In That Region!</p>}
                
            </div> 
        </div>
    </div>
  )
}

export default Orders