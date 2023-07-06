import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import ContactForm from "./ContactForm"

const Home = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        window.scrollTo(0, 0)

        const handleWindowResize = () => {
            setWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
    }, [])

    const discoverVariant = {
        hidden: {
            opacity: 0,
            x: -200
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: .75,
                delay: 1,
            }
        }
    }


    console.log(width)

    return (
        <div id="en">
            <div className="w-full">
                <img className="w-full" src="./home_img.png" />
            </div>
            {/*Discover ARE*/}
            <div className="py-32 max-lg:py-14">
                <motion.h1 className="orange text-8xl max-sm:text-2xl sm:max-lg:text-4xl heading mb-20 max-lg:mb-10" variants={discoverVariant} initial='hidden' whileInView='show' viewport={{amount: .2, once: true}}>Discover ARE</motion.h1>
                <motion.div className="flex justify-around max-lg:flex-col max-lg:items-center max-lg:space-y-10" initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 1.25, duration: 1}} viewport={{once: true}}>
                    <motion.div className="w-3/12 rounded-md bg-neutral-100 shadowed max-lg:w-7/12 px-4 pt-4 pb-8" >
                        <img src="./mana_8.JPG" alt="outrigger-1" className="h-[85%] w-full"/>
                        <button type="submit" className="text text-xl py-px font-semibold orange orange-border mt-4 px-6 rounded-md orange-button transition-color ease-in-out duration-200 max-lg:w-7/12 max-sm:text-xs max-sm:w-full" to={'/canoes'}><Link>Get An Outrigger</Link></button>
                    </motion.div>
                    <motion.div className="w-3/12 rounded-md bg-neutral-100 shadowed max-lg:w-7/12 px-4 pt-4 pb-8" >
                        <img src="./marara_6.JPG" alt="outrigger-2" className="h-[85%] w-full" />
                        <button type="submit" className="text text-xl font-semibold py-px orange orange-border mt-4 orange orange-border mt-4 px-6 rounded-md orange-button transition-color ease-in-out duration-200 max-lg:w-7/12 max-sm:text-xs max-sm:w-full"><Link to={"https://www.youtube.com/channel/UCX1yW5NSmLIGCmXhaD4A98Q"} target="_blank">See Them In Action</Link></button>
                    </motion.div>
                    <motion.div className="w-3/12 rounded-md bg-neutral-100 px-4 pt-4 pb-8 shadowed max-lg:w-7/12" >
                        <img src="./matahina_8.jpg" alt="outrigger-3" className="h-[85%] w-full" /> 
                        <button type="submit" className="text text-xl font-semibold py-px orange orange-border mt-4 px-6 rounded-md orange-button transition-color ease-in-out duration-200 max-lg:w-7/12 max-sm:text-xs max-sm:w-full"><Link to={'/order'}>Ordering A Canoe</Link></button>
                    </motion.div>
                </motion.div>
            </div>

            {/*introduction*/}

            <div className="py-32 bg-grad-grey max-lg:py-16">
                <h1 className="text-8xl max-sm:text-2xl sm:max-lg:text-4xl heading text-white mb-16">ARE Tahiti - Born For The Water</h1>    
                <div className="flex lg:justify-between px-20 max-lg:px-0 max-lg:items-center max-lg:flex-col">
                    <img className="lg:w-[55%] lg:h-[90%] max-lg:w-[90%] max-lg:mb-8" src="./marara_7.JPG" alt='Outrigger Paddler' id="intro-pic" />
                    <div className="w-5/12 max-lg:w-[90%]">
                        <p className="text-white text text-lg text-left mb-12 max-md:text-base">A lot more goes into an ARE Tahiti va’a, or outrigger, than meets the eye. 
                            To improve your speed and performance on the water, we take painstaking time and effort to perfect every last detail. 
                            Our quest for perfection steers everything we do, including refining the design, engineering and construction of our canoes. 
                            Plus we never lose sight of our customers, building a canoe that’s super-fast and super-fun. </p>

                        <ul className="text-left list-disc text-white ml-5 text-lg" id="list-2">
                            <li> 
                                <p className="text-white text mb-8 max-md:text-base">
                                    Unrelenting R&D – factoring in all the variables of water, wind, weight, and balance
                                </p>
                            </li>
                            <li>
                                <p className="text-white text mb-8 max-md:text-base">
                                    Uncompromising craftsmanship – because every little detail influences speed and performance 
                                </p>
                            </li>
                            <li>
                                <p className="text-white text mb-8 max-md:text-base">
                                    Unparalleled performance – exhilarating speed, effortless glide, and pure enjoyment! 
                                </p>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div> 
                    
            <div className="py-20 flex items-center flex-col">
            
                <h1 className="text-8xl max-sm:text-2xl sm:max-lg:text-4xl heading mb-16">Get In Touch</h1>
                <p className="text-xl text w-9/12 mb-10 max-md:text-base">ARE TAHITI designs and builds va’a, or outrigger canoes, for Tahiti and the Pacific islands, Australia, 
                    Hawaii, the mainland United States and Canada. If you're interested in ordering a canoe, get in touch with the 
                    nearest ARE representative for more information
                    on the purchasing, shipping, and pickup process</p>
                <div className="w-full">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Home