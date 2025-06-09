import { useContext, useState, type ChangeEvent, type FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AuthContext } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../common/Spinner';
import ActionButton from '../common/ActionButton';
import Input from '../common/Input';

const LoginPage = () => {
    const { dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { isPending, isError, error, data, mutate, reset } = useMutation({
        mutationFn: async ({
            email,
            password
        }: {
            email: string;
            password: string;
        }) => {
            const response = await fetch(
                `${import.meta.env.VITE_API}/users/authenticate`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                }
            );

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.data.user);
            }

            return response.json();
        }
    });

    const handleSubmit = (e: FormEvent) => {
        toast.dismiss();
        e.preventDefault();
        mutate({ email, password });
    };

    if (data) {
        dispatch({
            payload: { ...data.data.user, ...data.data.token },
            type: 'LOGIN'
        });
        toast.success('Successfully logged in!');
        navigate('/');
    }

    if (isError) {
        toast.error(error.message);
        reset();
    }

    return (
        <div className="grid h-screen place-content-center bg-[#F0F0F1]">
            <form
                onSubmit={handleSubmit}
                className="flex w-75 flex-col gap-5 border-1 border-[#c3c4c7] bg-white p-8"
            >
                <Input
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                    required
                />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                    required
                />
                <ActionButton
                    disabled={isPending}
                    className="flex justify-center px-0 disabled:opacity-80"
                >
                    {isPending && (
                        <Spinner bg="grey" spinnerColor="white" size="28px" />
                    )}
                    {!isPending && 'Log in'}
                </ActionButton>
            </form>
        </div>
    );
};

export default LoginPage;
