import type { ReactNode } from 'react';

const WhiteSection = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <section className="border-b-solid border-b-1 border-b-[#dddddd] bg-[#FFFFFF]">
            <div className={`container mx-auto py-30 ${className}`}>
                {children}
            </div>
        </section>
    );
};

export default WhiteSection;
