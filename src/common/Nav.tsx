import { mdiGithub, mdiLinkedin } from '@mdi/js';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';

const NavLinks = {
    portfolio: '#',
    blog: '#',
    contact: '#'
};

const NavIcon = ({ iconPath, link }: { iconPath: string; link: string }) => {
    return (
        <li>
            <a href={link} target="_blank">
                <Icon
                    className="transition-opacity duration-200 hover:opacity-50"
                    path={iconPath}
                    size={1.5}
                />
            </a>
        </li>
    );
};

const NavItem = ({ children, to }: { children: ReactNode; to: string }) => {
    return (
        <motion.li
            whileHover={{ color: '#757575' }}
            className="border-b-solid cursor-pointer border-b-1 border-b-[#363636] pb-5 not-first:pt-5 last:mb-5 sm:border-none sm:pb-0 sm:not-first:pt-0 sm:last:mb-0"
        >
            <Link to={to}>{children}</Link>
        </motion.li>
    );
};

const NavItems = ({ className }: { className?: string }) => {
    return (
        <ul className={`flex text-center sm:items-center ${className}`}>
            {Object.entries(NavLinks).map(([label, link]) => (
                <NavItem to={link}>{label}</NavItem>
            ))}
        </ul>
    );
};

const NavIcons = () => {
    return (
        <ul className="flex items-center justify-center gap-5">
            <NavIcon link="#" iconPath={mdiGithub} />
            <NavIcon link="#" iconPath={mdiLinkedin} />
        </ul>
    );
};

const MobileNav = ({ isActive }: { isActive: boolean }) => {
    return (
        <motion.nav
            className="absolute z-20 w-full bg-[#222222] pt-5 pb-5 sm:hidden"
            initial={{ y: -300, visibility: 'visible' }}
            animate={{
                transition: { ease: 'linear', duration: 0.2 },
                y: isActive ? 0 : -300,
                visibility: isActive ? 'visible' : 'hidden'
            }}
        >
            <NavItems className="flex-col" />
            <NavIcons />
        </motion.nav>
    );
};

const DesktopNav = () => {
    return (
        <nav className="hidden sm:flex sm:gap-20">
            <NavItems className="gap-5" />
            <NavIcons />
        </nav>
    );
};

export { MobileNav, DesktopNav, NavItems, NavLinks };
