import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { useEffect } from "react";

const Marara = () => {

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
        { title: 'Superior Craftsmanship', description: "Designed and tested by some of the best canoe builders in the business, the Marara's build quality is unmatched. Whether you choose the all carbon or the hybrid build, each of our canoes is rigorously tested to ensure a premium canoe build, everytime.", imgURL: './marara_10.JPG' },
        { title: 'Clip In Assembly', description: "Snap to assemble Iakos make it easy to assemble your boat and hit the surf. You'll be ready to go in no time at all, giving you more time to enjoy being on the water.", imgURL: './marara_3.JPG'},
        { title: 'Comfortable Ergonomics', description: "Nobody likes an uncomfortable boat. That's why we've built the Marara to be as comfortable as possible, even when you're paddling for long periods of time.", imgURL: './marara_4.JPG'}
      ];
       

    return (
        <div id="en">
            <motion.div className="flex flex-col items-center py-12" initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .25}} viewport={{once: true}}>
                <div className="w-8/12 mb-8">
                    <h1 className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey mb-8">V1 Marara - <span className="orange">Be At One</span></h1>
                    <p className="heading text-2xl max-lg:text-lg max-sm:text-base grey">USD $4,750 (pro-carbon) / USD 3,750 (hybrid)</p>
                </div>
                <img src="./marara_2.JPG" alt="Matahina Canoe" className="w-7/12 mb-12 max-lg:w-9/12"/>
                <hr className="orange-background w-5/12 h-[5px]" />
            </motion.div>
            <div className="flex flex-col items-center mb-16 max-lg:mb-10">
                <p className="w-10/12 text text-2xl mb-10 max-md:text-lg max-lg:w-9/12 max-sm:text-base">A new generation of outrigger canoe has been born: introducing the 
                    ARE Tahiti Marara V1. The Marara is at the forefront of single man outrigger canoes, effortlessly combining 
                    top of the line engineering and superb craftsmanship. With its smooth glide and responsive steering, the 
                    Marara delivers top notch water feel giving the feeling of being "at one" with the water. So what are you 
                    waiting for? Order your Marara today and take paddling to the next level!
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
                        <li className="mb-5">Length: 24.18 ft.</li>
                        <li className="mb-5">Beam: 13.39 in.</li>
                        <li className="mb-5">Hull Weight: 18 lbs. (pro-carbon) / 20 lbs. (hybrid)</li>
                        <li className="mb-5">Ama Weight: 4 lbs. (pro-carbon) / 5 lbs. (hybrid)</li>
                        <li className="mb-5">Iakos Weight: 2 lbs. (pro-carbon) / 3 lbs. (hybrid)</li>
                        <li className="mb-5">Total Weight Rigged: 24-26 lbs. / 28-30 lbs. (hybrid)</li>
                    </ul>
                </div>
                <img className="w-5/12 h-[100%] pr-10 max-lg:w-[90%] max-lg:pr-0 max-lg:mb-10" alt="Canoe" src="./marara_9.JPG" />
            </div>
            <div className="flex flex-col items-center py-20">
                <p className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey mb-10">See It In Action</p>
                <iframe className="w-7/12 h-[465px] max-lg:w-9/12 max-sm:h-[200px] sm:max-md:h-[275px]" src="https://www.youtube.com/embed/l451UCFvCWQ"></iframe>
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

export default Marara