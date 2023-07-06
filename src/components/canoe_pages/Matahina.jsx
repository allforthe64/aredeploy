import { Link } from "react-router-dom"

import { motion } from 'framer-motion'
import { useEffect } from "react";

const Matahina = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

    const slides = [
        { title: 'Secret Formula', description: 'The Matahina features the handling of a carbon ultralight OC6 with a polyester-fiberglass build. This means you can skip the hastle of finding a carbon repair specialist if you encounter any accidents on your quest for victory.', imgURL: './matahina_4.jpg' },
        { title: 'Built For Racing', description: 'Used by competetive outrigger teams everywhere, the Matahina OC6 is the ultimate racing weapon. Designed to be fast in all conditions, the Matahina is ready to lead your team to victory.', imgURL: './matahina_6.jpg'},
        { title: 'Adjustable Rigging', description: "The Matahina's rigging is adjustable, allowing for infinite customization to meet your needs. Whether you're rigging for flatwater or rough ocean, the Matahina's adjustable rigging allows you to set yourself up for success.", imgURL: './matahina_7.jpg'}
      ];
       
    return (
        <div id="en">
            <motion.div className="flex flex-col items-center py-12" initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .25}} viewport={{once: true}}>
                <div className="w-8/12 mb-8">
                    <h1 className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey mb-8">V6 Matahina - <span className="orange">King Of The Waves</span></h1>
                    <p className="heading text-2xl max-lg:text-lg max-sm:text-base grey">USD $19,000 (Wood Iakos/Fiber Glass Ama) / USD $21,000 (Carbon Iakos/Carbon Ama)</p>
                </div>
                <img src="./matahina_1.png" alt="Matahina Canoe" className="w-7/12 mb-12 max-lg:w-9/12"/>
                <hr className="orange-background w-5/12 h-[5px]" />
            </motion.div>
            <div className="flex flex-col items-center mb-16 max-lg:mb-10">
                <p className="w-10/12 text text-2xl mb-10 max-md:text-lg max-lg:w-9/12 max-sm:text-base">Meet the master of rough ocean waters: the ARE Tahiti Matahina V6.
                    Built for the surf, this fast sleek canoe is guaranteed to leave the competition
                    in your wake. With it's unrivaled racing record, the Matahina is used by winning teams 
                    in both Australia and Tahiti, including Shell Va'a. If you're looking for a boat 
                    to build your teams legacy with, then look no further than the Matahina V6.
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
                        <li className="mb-5">Length: 42.8 ft.</li>
                        <li className="mb-5">Beam: 22.08 in.</li>
                        <li className="mb-5">Hull Weight: Approx. 220 lbs.</li>
                        <li className="mb-5">Ama Weight: 18 lbs. (Carbon) / 28 lbs. (Fiber Glass)</li>
                        <li className="mb-5">Iakos Weight: 16 lbs. (Carbon) / 18 lbs. (Wooden)</li>
                        <li className="mb-5">Total Weight Rigged: 250 lbs. (Carbon) / 270 lbs. (Wooden)</li>
                    </ul>
                </div>
                <img className="w-5/12 h-[100%] pr-10 max-lg:w-[90%] max-lg:pr-0 max-lg:mb-10" alt="Canoe" src="./matahina_3.jpg" />
            </div>
            <div className="flex flex-col items-center py-20">
                <p className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey mb-10">See It In Action</p>
                <iframe className="w-7/12 h-[465px] max-lg:w-9/12 max-sm:h-[200px] sm:max-md:h-[275px]" src="https://www.youtube.com/embed/9Myqm1k2UNs"></iframe>
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

export default Matahina