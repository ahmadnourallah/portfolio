import { mdiChevronUp } from '@mdi/js';
import { NavLinks } from './Nav';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';

const Footer = () => {
    return (
        <footer className="font-proxima relative">
            <div className="text-md shadow-dark relative z-10 bg-[#f5f5f5] text-[#757575]">
                <div className="relative container mx-auto flex justify-between py-5">
                    <Link
                        className="transition-colors duration-200 hover:text-[#333333]"
                        to="/"
                    >
                        @ 2025 Ahmad Nour Alla
                    </Link>
                    <div className="flex gap-8">
                        {Object.entries(NavLinks).map(([label, link]) => (
                            <Link
                                className="transition-colors duration-200 hover:text-[#333333]"
                                to={link}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <motion.button
                transition={{ ease: 'linear', duration: 0.2 }}
                whileHover={{
                    translateY: -8
                }}
                className="shadow-dark absolute right-0 bottom-2 left-0 z-2 mx-auto h-[7.5rem] w-[7.5rem] rounded-full bg-[#f5f5f5] text-white"
            >
                <Icon
                    style={{ position: 'absolute', top: -20, right: 0 }}
                    path={mdiChevronUp}
                    size={5}
                />
            </motion.button>
        </footer>
    );
};

export default Footer;
