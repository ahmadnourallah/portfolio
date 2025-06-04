import { mdiMenu } from '@mdi/js';
import { useState } from 'react';
import { MobileNav, DesktopNav } from './Nav';
import Icon from '@mdi/react';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="font-proxima text-2xl text-white sm:text-lg">
            <header className="relative z-100 flex items-center bg-[#111111]">
                <div className="container mx-auto flex items-center justify-between p-5">
                    <div>Logo</div>

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
        </div>
    );
};

export default Header;
