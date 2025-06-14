import type { ReactNode } from 'react';
import { motion } from 'motion/react';

const SlideAnimation = ({
    children,
    className,
    axis = 'x',
    direction = 1
}: {
    children: ReactNode;
    className?: string;
    axis?: 'x' | 'y';
    direction?: 1 | -1;
}) => {
    let initial;

    if (axis === 'x') {
        initial = {
            x: direction < 0 ? '-20vw' : '20vw'
        };
    } else {
        initial = {
            y: direction < 0 ? '-20vh' : '20vh'
        };
    }

    return (
        <motion.div
            className={className}
            transition={{ ease: 'linear', duration: 0.2, delay: 0.2 }}
            initial={{ opacity: 0, ...initial }}
            whileInView={{
                opacity: 1,
                [axis === 'x' ? 'x' : 'y']: 0
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default SlideAnimation;
