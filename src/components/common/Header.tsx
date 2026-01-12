import { mdiMenu } from '@mdi/js';
import { useState } from 'react';
import { MobileNav, DesktopNav } from './Nav';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import logo from '../../assets/fav.svg';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <motion.div
            transition={{ ease: 'linear', duration: 0.2 }}
            initial={{ translateY: -60, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="font-proxima text-2xl text-white sm:text-lg"
        >
            <header className="relative z-100 flex items-center bg-[#111111]">
                <div className="container mx-auto flex items-center justify-between px-5 py-0.5">
                    <Link to="/">
                        <img
                            className="h-15 w-15 brightness-0 invert-100 transition-opacity duration-300 hover:opacity-80 sm:h-22 sm:w-22"
                            src={logo}
                            alt=""
                        />
                    </Link>

                    <button
                        className="sm:hidden"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <Icon path={mdiMenu} className="h-8 w-8" />
                    </button>

                    <DesktopNav />
                </div>
            </header>

            <MobileNav isActive={isActive} />
        </motion.div>
    );
};

export default Header;
