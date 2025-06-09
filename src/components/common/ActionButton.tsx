import type { MouseEventHandler, ReactNode } from 'react';

const ActionButton = ({
    children,
    className,
    onClick,
    disabled = false
}: {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler;
    disabled?: boolean;
}) => {
    return (
        <button
            disabled={disabled}
            className={`font-proxima rounded-lg bg-[#317F39] px-10 py-3 text-xl font-bold text-white transition-opacity duration-200 hover:opacity-80 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ActionButton;
