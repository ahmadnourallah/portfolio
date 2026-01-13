import Spinner from './Spinner';

const Loading = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Spinner size="100px" />
        </div>
    );
};

export default Loading;
