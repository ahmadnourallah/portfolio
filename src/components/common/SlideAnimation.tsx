import type { ReactNode } from 'react';
import { motion } from 'motion/react';

const SlideAnimation = ({
    children,
    className,
    slideFromRight = false
}: {
    children: ReactNode;
    className?: string;
    slideFromRight?: boolean;
}) => {
    return (
        <motion.div
            className={className}
            transition={{ ease: 'linear', duration: 0.2, delay: 0.2 }}
            initial={{
                opacity: 0,
                x: slideFromRight ? '20vw' : '-20vw'
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default SlideAnimation;
