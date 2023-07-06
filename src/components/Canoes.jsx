import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { useEffect } from "react"

const Canoes = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="en">
            <div className="flex flex-col items-center py-20 max-lg:py-10">
                <h1 className="orange heading sm:max-md:mb-8 max-sm:mb-10 mb-20 max-sm:text-4xl sm:max-md:text-6xl text-8xl">Canoes</h1>
                <p className="text text-lg w-9/12 max-sm:w-11/12">Ready to take the next step on your outrigger journey?
                    Well, you're in the right place! Athletes from around the world have 
                    won races in ARE canoes. Now, it's your turn. Check out our three models
                    below.
                </p>
            </div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:-50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading max-sm:text-2xl sm:max-lg:text-4xl text-6xl grey w-8/12">V6 Matahina - <span className="orange">King Of The Waves</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col max-lg:items-center max-lg:py-4">
                    <img src="./matahina_2.jpg" alt="Matahina Canoe" className="w-5/12 max-lg:w-8/12 max-lg:mb-6" />
                    <div className="w-4/12 max-lg:w-[90%] flex items-center">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl max-sm:text-base sm:max-md:text-lg max-lg:text-center text-left max-lg:mb-8 max-md:mb-4 mb-10" id="canoe-text-1">Sleek and sharp looking, ARE Tahiti's 
                                V6 Matahina is a superb competetive outrigger. Built for the surf,
                                the Matahina is the perfect boat to launch your racing tradition from.
                            </p>
                            <Link to={'/matahina'} className="orange orange-border rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading text-6xl grey w-8/12 max-sm:text-2xl sm:max-lg:text-4xl">V1 Marara - <span className="orange">Be At 1</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col-reverse max-lg:items-center max-lg:py-4">
                    <div className="w-4/12 flex items-center max-lg:w-[90%]">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl text-left max-lg:mb-8 max-md:mb-4 mb-10 lg:ml-14 max-sm:text-base sm:max-md:text-lg max-lg:text-center">At the forefront of premium 
                                outriggers, the Marara V1 is the ultimate solo outrigger
                                experience. Are you ready to be "at one"?
                            </p>
                            <Link to={'/marara'} className="orange orange-border rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                    <img src="./marara_1.JPG" alt="Marara Canoe" className="w-5/12 max-lg:w-8/12 max-lg:mb-6" />
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:-50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading text-6xl grey w-8/12 max-sm:text-2xl sm:max-lg:text-4xl">V1 Mako - <span className="orange">More of the best</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col max-lg:items-center max-lg:py-4">
                    <img src="./mako_2.jpg" alt="Matahina Canoe" className="w-5/12 w-5/12 max-lg:w-8/12 max-lg:mb-6" />
                    <div className="w-4/12 flex items-center max-lg:w-[90%]">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl text-left max-lg:mb-8 max-md:mb-4 mb-10 lg:ml-14 max-sm:text-base sm:max-md:text-lg max-lg:text-center" id="canoe-text-1">Designed for paddlers 180 pounds plus,
                            the Mako V1 has the same features you love about the Marara, but in a larger, more ergonomic package.
                            </p>
                            <Link to={'/mako'} className="max-md:text-lg max-md:px-10 orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .4, once: true}}>
                <h2 className="heading text-6xl grey w-8/12 max-sm:text-2xl sm:max-lg:text-4xl">OC1 Mana - <span className="orange">Raising The Standard</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col max-lg:items-center max-lg:py-4">
                    <img src="./mana_1.JPG" alt="Mana OC1" className="w-5/12 max-lg:w-8/12 max-lg:mb-6" />
                    <div className="w-4/12 max-lg:w-[90%] flex items-center">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl text-left mb-10 max-lg:mb-8 max-md:mb-4 max-sm:text-base sm:max-md:text-lg max-lg:text-center" id="canoe-text-3">For years, ARE Tahiti has set the standard
                                for outrigger excellence. Now, we've raised the bar again with our
                                Mana OC1. Balancing craftsmanship and accessability with performance,
                                the Mana OC1 is ready to take on whatever awaits.
                            </p>
                            <Link to={'/mana'} className="orange orange-border rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="py-20 flex flex-col items-center max-lg:py-10" initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: .5, delay:.25, type:'spring'}} viewport={{amount: .4}}>
                <h1 className="grey text-6xl heading mb-10 max-sm:text-2xl sm:max-lg:text-4xl max-md:mb-4">Next Steps</h1>
                <p className="text text-2xl w-8/12 mb-10 max-lg:mb-8 max-md:mb-4 max-sm:text-base sm:max-md:text-lg">Now that you've chosen the perfect canoe,
                    it's time to order it! Click the button below for more information
                    on our ordering process.
                </p>
                <Link to={'/order'} className="orange-background orange-bg-button orange-border text-white rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 transition-color duration-200 ease-in-out">See More</Link>
            </motion.div>
        </div> 

    )
}

export default Canoes