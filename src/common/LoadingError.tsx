import ActionButton from './ActionButton';

const LoadingError = ({ onClick }: { onClick: CallableFunction }) => {
    return (
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5">
            <p className="font-proxima text-center text-2xl font-bold">
                Something went wrong!
            </p>
            <ActionButton onClick={onClick}>Retry</ActionButton>
        </div>
    );
};

export default LoadingError;
