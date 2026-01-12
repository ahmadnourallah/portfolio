import type { ReactNode } from 'react';
import { mdiFacebook, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';
import WhiteSection from '../common/WhiteSection';
import SlideAnimation from '../common/SlideAnimation';
import Subtext from '../common/Subtext';
import H1 from '../common/H1';
import me from '../../assets/me.webp';

const SocialLink = ({
    path,
    color,
    children,
    href
}: {
    path: string;
    color?: string;
    children: ReactNode;
    href?: string;
}) => {
    return (
        <a
            style={{ color }}
            className="font-proxima flex items-center gap-2 text-xl font-bold transition-opacity duration-200 hover:opacity-80"
            href={href}
        >
            <Icon path={path} className="h-15 w-15" />
            <span>{children}</span>
        </a>
    );
};

const ContactPage = () => {
    return (
        <WhiteSection className="flex flex-col justify-between gap-10 sm:flex-row">
            <SlideAnimation direction={-1} className="flex-1/2">
                <H1>contact.</H1>
                <Subtext className="mt-5 mb-8">
                    Get in touch with me via social media.
                </Subtext>

                <div className="mt-8 flex justify-between p-4">
                    <SocialLink href="" path={mdiFacebook} color="#3B5998">
                        Facebook
                    </SocialLink>

                    <SocialLink href="" path={mdiLinkedin} color="#0982c0">
                        LinkedIn
                    </SocialLink>
                </div>
            </SlideAnimation>

            <SlideAnimation className="flex justify-center">
                <img src={me} className="w-130" />
            </SlideAnimation>
        </WhiteSection>
    );
};

export default ContactPage;
