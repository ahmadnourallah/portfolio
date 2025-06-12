import type { ChangeEventHandler } from 'react';

const Input = ({
    type = 'text',
    label,
    value,
    required = false,
    onChange,
    className,
    disabled = false
}: {
    type?: string;
    label: string;
    value?: string | number;
    required?: boolean;
    onChange?: ChangeEventHandler | undefined;
    className?: string;
    disabled?: boolean;
}) => {
    return (
        <label className="font-proxima flex flex-col gap-1">
            {label}
            <input
                disabled={disabled}
                className={`rounded-sm border-1 border-[#8c8f94] px-2 py-1 text-lg focus:border-transparent focus:outline-2 focus:outline-[#2271b1] ${className}`}
                type={type}
                value={value}
                required={required}
                onChange={onChange}
            />
        </label>
    );
};

export default Input;
