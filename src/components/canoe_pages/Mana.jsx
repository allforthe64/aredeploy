import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { useEffect } from "react";

const Mana = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const slides = [
        { title: 'Superior Stability', description: 'Stable and smooth, the Mana OC1 is designed to be the ultimate beginner canoe. Whether your just learning how to paddle, or getting ready to practice surfing, the Mana is a perfect paddling companion.', imgURL: './mana_5.JPG' },
        { title: 'Clip In Assembly', description: "Snap to assemble Iakos make it easy to assembly your boat and hit the surf. You'll be ready to go in no time at all, giving you more time to enjoy being on the water.", imgURL: './mana_7.jpg'},
        { title: 'Adjustable Seat', description: "Every Mana OC1 comes with a comfortable adjustable seat. The seat moves on a velcro strip, making the Mana usable for all sizes of paddlers.", imgURL: './mana_2.JPG'}
      ];
       
    const cardVariant = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0
            }
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: .5
            }
        }
    }

    return (
        <div id="en">
            <motion.div className="flex flex-col items-center py-12" initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .25}} viewport={{once: true}}>
                <div className="w-8/12 mb-8">
                    <h1 className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey mb-8">OC1 Mana - <span className="orange">Raising The Standard</span></h1>
                    <p className="heading text-2xl max-lg:text-lg max-sm:text-base grey">USD $4,900 (pro-carbon) / USD $3,900 (hybrid)</p>
                </div>
                <img src="./mana_3.JPG" alt="Matahina Canoe" className="w-7/12 mb-12 max-lg:w-9/12"/>
                <hr className="orange-background w-5/12 h-[5px]" />
            </motion.div>
            <div className="flex flex-col items-center mb-16 max-lg:mb-10">
                <p className="w-10/12 text text-2xl mb-10 max-md:text-lg max-lg:w-9/12 max-sm:text-base">For years, the OC1 has been the standard for outrigger paddling. Meant to 
                    be fun and easy to handle, these boats are perfect for newer paddlers or anyone looking to go out and just enjoy 
                    being on the water. That's where ARE Tahiti's Mana OC1 comes in. With its sharp looks and excellent handling, 
                    this boat is a paddlers dream. But don't let its playful nature fool you. The Mana's maneuverablilty and ability 
                    to tackle a variety of conditions make it anything but standard. Order yours now and experience paddling in a whole new way.
                </p>
                <Link to={'/order'} className="orange orange-border rounded-3xl max-md:text-lg max-md:px-10 headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">Order Now</Link>
            </div>
            <div className="py-10">
                <p className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey mb-20 max-lg:mb-4">Highlights</p>
                <div className="flex flex-col items-center">
                        {slides.map((slide, index) => 
                            <motion.div className="flex justify-center py-10" key={index} variants={cardVariant} initial={'hidden'} whileInView={'show'} viewport={{ammount: 'all'}}> 
                                <div className="flex justify-around max-lg:flex-col w-9/12 max-lg:items-center">
                                    <img src={slide.imgURL} className='w-[45%] sm:max-lg:w-6/12 max-sm:w-full max-lg:mb-4'/>
                                    <div className="w-[45%] max-lg:w-10/12 flex items-center">
                                        <div>
                                            <p className="heading orange text-2xl max-sm:text-base mb-8 max-lg:mb-4">{slide.title}</p>
                                            <p className="text text-lg max-lg:text-sm">{slide.description}</p>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </motion.div>
                        )}
                </div>
            </div>
            <div className="flex justify-between py-12 max-lg:flex-col-reverse max-lg:items-center">
                <div className="w-6/12 pl-20 max-lg:pl-0 max-lg:flex-col max-lg:flex max-lg:items-start max-lg:w-[90%]">
                    <p className="heading grey text-6xl max-sm:text-2xl sm:max-md:text-4xl text-left mb-10">Specifications</p>
                    <ul className="text text-left list-disc pl-10 grey text-2xl max-sm:text-base">
                        <li className="mb-5">Length: 20.76 ft.</li>
                        <li className="mb-5">Beam: 15.15 in.</li>
                        <li className="mb-5">Hull Weight: 19 lbs. (pro-carbon) / 25 lbs. (hybrid)</li>
                        <li className="mb-5">Ama Weight: 3 lbs. (pro-carbon) / 4 lbs. (hybrid)</li>
                        <li className="mb-5">Iakos Weight: 2 lbs. (pro-carbon) / 2 lbs. (hybrid)</li>
                        <li className="mb-5">Total Weight Rigged: 24-25 lbs. (pro-carbon) / 28-30 lbs. (hybrid)</li>
                    </ul>
                </div>
                <img className="w-5/12 h-[100%] pr-10 max-lg:w-[90%] max-lg:pr-0 max-lg:mb-10" alt="Canoe" src="./mana_4.JPG" />
            </div>
            <div className="flex flex-col items-center py-20">
                <p className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey mb-10">See It In Action</p>
                <iframe className="w-7/12 h-[465px] max-lg:w-9/12 max-sm:h-[200px] sm:max-md:h-[275px]" src="https://www.youtube.com/embed/iopLZR0QCFU"></iframe>
            </div>
            <motion.div className="flex flex-col items-center py-12" initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}}>
                <p className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey mb-10 w-10/12">Ready To <span className="orange">Crush Some Waves?</span></p>
                <p className="text text-2xl w-10/12 mb-10 max-sm:text-base">
                    Time to get your hands on an ARE canoe. You'll be surfing waves and winning races in no time!
                    Click the button to order your canoe!
                </p>
                <Link to={'/order'} className="orange orange-border rounded-3xl max-md:text-lg max-md:px-10 headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">Order Now</Link>
            </motion.div>
        </div>
    )
}

export default Mana