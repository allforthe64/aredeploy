import ContactForm from "./ContactForm"
import { useEffect } from "react"
import { motion } from "framer-motion";


const OrderSimple = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='py-20'>
        <motion.div initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} viewport={{once: true}} transition={{duration: .75}} className='flex flex-col items-center'>
            <h1 className='heading grey max-md:text-3xl max-md:w-11/12 md:max-lg:text-5xl text-6xl'>Ready To Get Your Own ARE Tahiti Canoe?</h1>
            <div className='flex justify-around py-20 max-lg:flex-col-reverse max-lg:items-center max-lg:py-10'>
                <div className='w-5/12 text-left max-lg:w-10/12 max-lg:text-center'>
                    <p className='heading grey text-4xl mb-6 pt-6 max-md:text-2xl'>The Order Process</p>
                    <p className='text text-left text-lg max-lg:text-center'>To get your ARE canoe, fill out the contact form below to get in touch with your region's rep. Your rep will contact you with your region's currently available inventory, as well as the steps required to purchase a custom boat. Payment for your canoe will be coordinated and handled by your rep. Your rep will also explain the shipment process and any steps you need to take to get your canoe to your location.</p>
                </div>
                <div className='w-4/12 max-lg:w-8/12'>
                    <img alt='canoe' src='marara_4.JPG' />
                </div>
            </div>
        </motion.div>
        <ContactForm />
    </div>
  )
}

export default OrderSimple