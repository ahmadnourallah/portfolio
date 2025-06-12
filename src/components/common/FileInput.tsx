import type { ChangeEventHandler } from 'react';
import { handleEnter } from '../../utils/keyboard';

const FileInput = ({
    label,
    onChange,
    className,
    accept,
    disabled = false,
    required
}: {
    label: string;
    onChange?: ChangeEventHandler;
    className?: string;
    accept?: string;
    disabled?: boolean;
    required?: boolean;
}) => {
    return (
        <label
            tabIndex={0}
            onKeyDown={handleEnter}
            role="button"
            style={{ opacity: disabled ? '0.8' : '1' }}
            className={`font-proxima cursor-pointer rounded-lg bg-[#317F39] px-10 py-3 text-xl font-bold text-white transition-opacity duration-200 hover:opacity-80 ${className}`}
        >
            {label}
            <input
                accept={accept}
                type="file"
                onChange={onChange}
                className="hidden"
                required={required}
            />
        </label>
    );
};

export default FileInput;
