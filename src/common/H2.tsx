import type { ReactNode } from 'react';

const H2 = ({ children }: { children: ReactNode }) => {
    return (
        <h2 className="font-paroxima text-4xl font-normal text-[#333333]">
            {children}
        </h2>
    );
};

export default H2;
