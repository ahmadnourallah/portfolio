import type { ReactNode } from 'react';

const GreySection = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <section className="shadow-dark bg-[#FAFAFA]">
            <div className={`container mx-auto py-30 ${className}`}>
                {children}
            </div>
        </section>
    );
};

export default GreySection;
