import { motion } from 'motion/react';
import {
    mdiApi,
    mdiCheckBold,
    mdiDatabase,
    mdiGithub,
    mdiLanguageTypescript,
    mdiNodejs,
    mdiReact,
    mdiTailwind,
    mdiWeb
} from '@mdi/js';
import SlideAnimation from '../common/SlideAnimation';
import GreySection from '../common/GreySection';
import WhiteSection from '../common/WhiteSection';
import H1 from '../common/H1';
import H2 from '../common/H2';
import me from '../../assets/me.webp';
import chart from '../../assets/pie-chart.webp';
import gamehub from '../../assets/gamehub.webp';
import resumify from '../../assets/resumify.webp';
import memorycard from '../../assets/memorycard.webp';
import logo from '../../assets/fav.svg';
import portfolio from '../../assets/portfolio.webp';
import Subtext from '../common/Subtext';
import Icon from '@mdi/react';
import shimmer from '../../utils/shimmer';
import ActionButton from '../common/ActionButton';

const ProjectCard = ({
    title,
    imageSrc,
    githubUrl,
    viewUrl,
    apiUrl,
    features,
    techIcons,
    isReversed = false
}: {
    title: string;
    imageSrc: string;
    githubUrl: string;
    viewUrl: string;
    apiUrl?: string;
    features: string[];
    techIcons: string[];
    isReversed?: boolean;
}) => {
    return (
        <div className="perspective-distant perspective-origin-center">
            <motion.div
                initial={{ rotateY: 0 }}
                whileInView={{ rotateY: 180 }}
                viewport={{ once: true }}
                transition={{ type: 'keyframes', delay: 0.5, duration: 1 }}
                className="relative rounded-2xl bg-[#f3f4f6] shadow-2xl will-change-transform transform-3d"
            >
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center backface-hidden"
                    initial={{ rotateY: 0 }}
                >
                    <img className="w-30" src={logo} />
                </motion.div>

                <motion.div
                    initial={{ rotateY: 180 }}
                    className={`flex w-full flex-col backface-hidden ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
                >
                    <div>
                        <img
                            className={`h-full w-full rounded-t-2xl sm:w-100 ${isReversed ? 'sm:rounded-tl-none sm:rounded-r-2xl' : 'sm:rounded-l-2xl sm:rounded-tr-none'}`}
                            src={`data:image/svg+xml;base64,${shimmer()}`}
                            onLoad={(event) =>
                                ((event.target as HTMLImageElement).src =
                                    imageSrc)
                            }
                            loading="lazy"
                        />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between px-3 py-6 sm:px-6">
                        <div className="flex w-full flex-col items-center justify-between gap-y-5 sm:flex-row">
                            <h3 className="font-proxima text-3xl font-bold">
                                {title}
                            </h3>
                            <div className="flex gap-5">
                                <motion.a
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                    href={viewUrl}
                                    target="_blank"
                                >
                                    <Icon size={1.5} path={mdiWeb} />
                                </motion.a>

                                {apiUrl && (
                                    <motion.a
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.3 }}
                                        className="rounded-full bg-[#2e2d2d]"
                                        href={apiUrl}
                                        target="_blank"
                                    >
                                        <Icon
                                            path={mdiApi}
                                            className="text-white"
                                            size={1.5}
                                        />
                                    </motion.a>
                                )}

                                <motion.a
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                    href={githubUrl}
                                    target="_blank"
                                >
                                    <Icon path={mdiGithub} size={1.5} />
                                </motion.a>
                            </div>
                        </div>

                        <ul className="mt-8 ml-4 flex flex-1 flex-col gap-2 text-lg">
                            {features.map((feature) => (
                                <li className="group flex gap-4">
                                    <Icon
                                        className="shrink-0 grow-0 basis-10 transition-transform duration-200 group-hover:-translate-y-2"
                                        path={mdiCheckBold}
                                    />
                                    <span className="col-span-3 sm:col-span-7">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap justify-center gap-5 self-end">
                            {techIcons.map((icon) => (
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="w-max rounded-full bg-[#2e2d2d] p-1"
                                >
                                    <Icon
                                        path={icon}
                                        className="text-white"
                                        size={1.3}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const PortfolioPage = () => {
    return (
        <>
            <WhiteSection className="flex flex-col justify-between gap-10 pb-0 sm:flex-row">
                <SlideAnimation direction={-1} className="flex-1/2">
                    <H1>about.</H1>
                    <Subtext className="mt-5 mb-8">
                        I'm a full stack developer, available for remote work.
                    </Subtext>

                    <p className="font-proxima text-xl">
                        Whether you need my help for a simple landing page or as
                        a part of your team, I have the solutions for your
                        problems.
                    </p>

                    <a href="mailto:ahmadnurallah@gmail.com">
                        <ActionButton className="my-5">
                            Let&apos;s talk
                        </ActionButton>
                    </a>
                </SlideAnimation>

                <SlideAnimation className="flex justify-center">
                    <img src={me} className="w-130" />
                </SlideAnimation>
            </WhiteSection>

            <GreySection className="flex flex-col items-center justify-between gap-10 sm:flex-row">
                <SlideAnimation direction={-1}>
                    <H2>Part frontend</H2>
                    <p className="font-proxima mt-8 mb-3 text-xl">HTML / CSS</p>
                    <p className="font-proxima mb-3 text-xl">Java/Typescript</p>
                    <p className="font-proxima mb-3 text-xl">Reacjs</p>
                    <p className="font-proxima mb-3 text-xl">Tailwindcss</p>
                    <p className="font-proxima text-xl">Framer motion</p>
                </SlideAnimation>

                <SlideAnimation axis="y">
                    <img src={chart} />
                </SlideAnimation>

                <SlideAnimation>
                    <H2>Part backend</H2>
                    <p className="font-proxima mt-8 mb-3 text-xl">
                        Java/Typescript
                    </p>
                    <p className="font-proxima mb-3 text-xl">Express</p>
                    <p className="font-proxima mb-3 text-xl">Nextjs</p>
                    <p className="font-proxima mb-3 text-xl">Python</p>
                    <p className="font-proxima text-xl">Django</p>
                </SlideAnimation>
            </GreySection>

            <WhiteSection className="font-proxima flex flex-col items-center gap-25">
                <h2 className="font-proxima text-5xl font-bold">My Projects</h2>
                <ProjectCard
                    imageSrc={gamehub}
                    title="GameHub"
                    viewUrl="https://gamehub-lilac.vercel.app/"
                    apiUrl="https://github.com/ahmadnourallah/game-store-api"
                    githubUrl="https://github.com/ahmadnourallah/gamehub"
                    features={[
                        'A full-fledged, full-stack, black-themed, ecommerce application for video games.',
                        'Built with Next.js 15&apos;s App Router, Typescript, Tailwind CSS, Express.js and Prisma.',
                        'A dashboard system with role-based authentication using Auth.js.',
                        'A cart system using the Context API and support for pagination.'
                    ]}
                    techIcons={[
                        mdiReact,
                        mdiLanguageTypescript,
                        mdiTailwind,
                        mdiNodejs,
                        mdiDatabase
                    ]}
                />

                <ProjectCard
                    imageSrc={portfolio}
                    title="Portfolio"
                    viewUrl="https://ahmadnourallah.github.io/"
                    apiUrl="https://github.com/ahmadnourallah/blog-api"
                    githubUrl="https://github.com/ahmadnourallah/portfolio"
                    features={[
                        'A modern, customizable portfolio full-stack application, built with React, Typescript, Tailwind CSS, Express.js and Prisma.',
                        'Remote state management with Tanstack React Query.',
                        'A blog system API with authentication, support for CRUD operations, and throrough documentations using Swagger UI.',
                        'Animations with Framer Motion, rich text editing, syntax highlighting and markdown support.'
                    ]}
                    techIcons={[
                        mdiReact,
                        mdiLanguageTypescript,
                        mdiTailwind,
                        mdiNodejs,
                        mdiDatabase
                    ]}
                    isReversed={true}
                />

                <ProjectCard
                    imageSrc={resumify}
                    title="Resumify"
                    viewUrl="https://ahmadnourallah.github.io/resumify"
                    githubUrl="https://github.com/ahmadnourallah/resumify"
                    features={[
                        'A flexible, user-friendly CV builder with a modern responsive design, built with React and Vite.',
                        'Instant preview in browser with native HTML elements.',
                        'In-client, non-blocking PDF generation on the fly using React PDF and the Web Workers API.',
                        'Utilizes Immer for safe state mutation.'
                    ]}
                    techIcons={[mdiReact]}
                />

                <ProjectCard
                    imageSrc={memorycard}
                    title="Gravity Falls"
                    viewUrl="https://ahmadnourallah.github.io/memory-card"
                    githubUrl="https://github.com/ahmadnourallah/memory-card"
                    features={[
                        'A full-fledged memory card game, inspired by Gravity Falls.',
                        'Built with React, Vite, Tailwindd CSS.',
                        'Caching and server state management with Tanstack Query.',
                        'Captivating animations using Framer Motion.'
                    ]}
                    techIcons={[mdiReact, mdiTailwind]}
                    isReversed={true}
                />
            </WhiteSection>
        </>
    );
};

export default PortfolioPage;
