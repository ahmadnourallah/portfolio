import type { ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({
    children,
    className,
    ...rest
}: {
    children?: ReactNode;
    className?: string;
}) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
        <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            showLineNumbers={true}
            style={a11yDark}
        />
    ) : (
        <code {...rest} className={className}>
            {children}
        </code>
    );
};

export default Code;
