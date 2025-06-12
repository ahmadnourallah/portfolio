import type { KeyboardEvent } from 'react';

function handleEnter(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        e.target?.dispatchEvent(
            new PointerEvent('click', { bubbles: true, cancelable: true })
        );
    }
}

export { handleEnter };
