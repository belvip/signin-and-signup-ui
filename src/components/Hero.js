import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

function Hero() {

    const fadeInFromTop = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    return (
        <div className="align-element flex justify-center">
            <div className="lg:w-[80%] w-full py-1  space-y-4">
                <motion.h1
                    className="font-inter uppercase text-headerColor  xl:text-headerText md:text-4xl text-2xl mx-auto text-center font-bold sm:w-[95%] w-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInFromTop}
                    >
                    Welcome to Signin and signup app.
                </motion.h1>

                <div className="flex items-center justify-center gap-3 py-10 ">
                    <Link to='/login'>
                        <button type="button" 
                        className="sm:w-52 w-44 bg-customRed font-semibold hover:scale-105 transition-all duration-200 cursor-pointer text-white px-10 py-3 rounded-sm">
                        Signin
                    </button>
                    </Link>

                    <Link to='/signup'>
                        <button type="button" 
                            className="sm:w-52 w-44 bg-btnColor font-semibold hover:scale-105 transition-all duration-200 cursor-pointer text-white px-10 py-3 rounded-sm">
                            Signup
                        </button>
                    </Link>
                </div>

                

            </div>
            

        </div>
    )
}

export default Hero