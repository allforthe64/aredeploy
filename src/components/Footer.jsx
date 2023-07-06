import { Link } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="orange-background flex flex-col items-center py-10">
            <div className="w-3/12 flex justify-around mb-10" id="socials-container">
                <SocialIcon url="https://www.facebook.com/areoutrigger/" target={'_blank'} fgColor="#FFFFFF" bgColor="#171717" className="hover:scale-125 transition ease-in-out duration-300"/>
                <SocialIcon url="https://www.youtube.com/channel/UCX1yW5NSmLIGCmXhaD4A98Q" target={'_blank'} fgColor="#FFFFFF" bgColor="#171717" className="hover:scale-125 transition ease-in-out duration-300"/>
                <SocialIcon url="https://www.instagram.com/aretahiti" fgColor="#FFFFFF" target={'_blank'} bgColor="#171717" className="hover:scale-125 transition ease-in-out duration-300"/>
            </div>
            <h1 className="text-white text text-xl">ARE Outrigger World © 2022. All rights reserved.</h1>
        </div>
    )
}

export default Footer