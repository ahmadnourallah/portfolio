import SlideAnimation from '../common/SlideAnimation';
import GreySection from '../common/GreySection';
import WhiteSection from '../common/WhiteSection';
import H1 from '../common/H1';
import H2 from '../common/H2';
import me from '../../assets/me.jpg';
import chart from '../../assets/pie-chart.png';
import Subtext from '../common/Subtext';

const PortfolioPage = () => {
    return (
        <>
            <WhiteSection className="flex flex-col justify-between gap-10 sm:flex-row">
                <SlideAnimation className="flex-1/2">
                    <H1>about.</H1>
                    <Subtext className="mt-5 mb-8">
                        I'm a full stack developer, available for remote work.
                    </Subtext>

                    <p className="font-proxima text-xl">
                        As a full stack developer, I create sleek, eye-catchy
                        fronts and invent secure and maintainable backends.
                        Whether you need my help for a simple landing page or as
                        a part of your team, I have the solutions for your
                        problems.
                    </p>
                </SlideAnimation>

                <SlideAnimation
                    slideFromRight={true}
                    className="flex justify-center"
                >
                    <img src={me} className="w-130" />
                </SlideAnimation>
            </WhiteSection>

            <GreySection className="flex flex-col items-center justify-between gap-10 sm:flex-row">
                <div>
                    <H2>Part frontend</H2>
                    <p className="font-proxima mt-8 mb-3 text-xl">HTML / CSS</p>
                    <p className="font-proxima mb-3 text-xl">Java/Typescript</p>
                    <p className="font-proxima mb-3 text-xl">Reacjs</p>
                    <p className="font-proxima mb-3 text-xl">Tailwindcss</p>
                    <p className="font-proxima text-xl">Framer motion</p>
                </div>

                <div>
                    <img src={chart} />
                </div>

                <div>
                    <H2>Part backend</H2>
                    <p className="font-proxima mt-8 mb-3 text-xl">
                        Java/Typescript
                    </p>
                    <p className="font-proxima mb-3 text-xl">Express</p>
                    <p className="font-proxima mb-3 text-xl">Nextjs</p>
                    <p className="font-proxima mb-3 text-xl">Python</p>
                    <p className="font-proxima text-xl">Django</p>
                </div>
            </GreySection>
        </>
    );
};

export default PortfolioPage;
