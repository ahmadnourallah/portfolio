// import '../../styles/spinner.css';
import { motion } from 'motion/react';

function Spinner({ size }: { size: string }) {
    return (
        <motion.div
            className="relative grid place-content-center rounded-full"
            animate={{ rotate: ['0deg', '360deg'] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            style={{
                width: size,
                height: size,
                border: `calc(${size} / 10) solid #dae1e7`
            }}
        >
            <div
                className="absolute rounded-full"
                style={{
                    top: `calc((${size} / 10) * -1)`,
                    left: `calc((${size} / 10) * -1)`,
                    border: `calc(${size} / 10) solid #606f7b`,
                    width: size,
                    height: size,
                    clipPath:
                        'inset(0 12.857% 77% 12.857% round 0 0 5.714% 5.714%)'
                }}
            ></div>
        </motion.div>
    );
}

export default Spinner;
