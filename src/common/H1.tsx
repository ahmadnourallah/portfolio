import type { ReactNode } from 'react';

const H1 = ({ children }: { children: ReactNode }) => {
    return (
        <h1 className="font-paroxima text-8xl font-bold -tracking-widest text-[#333333]">
            {children}
        </h1>
    );
};

export default H1;
