import type { ReactNode } from 'react';

const Subtext = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <p className={`font-proxima text-2xl text-[#757575] ${className}`}>
            {children}
        </p>
    );
};

export default Subtext;
