import { useNavigate } from 'react-router-dom';
import WhiteSection from './WhiteSection';
import H1 from './H1';
import Subtext from './Subtext';
import ActionButton from './ActionButton';
import notfound from '../../assets/404.webp';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <WhiteSection className="flex flex-col justify-between gap-10 sm:flex-row">
            <div className="flex-1/2">
                <H1>Hmmm ...</H1>
                <Subtext className="mt-2 mb-5">
                    The page you're looking for is not found.
                </Subtext>
                <p className="font-proxima mb-8 text-xl">
                    It looks like you've lost your way. Maybe you want to go
                    back home?
                </p>
                <ActionButton onClick={() => navigate('/')}>
                    Go home
                </ActionButton>
            </div>

            <div className="flex justify-center">
                <img src={notfound} className="w-130" />
            </div>
        </WhiteSection>
    );
};

export default NotFound;
