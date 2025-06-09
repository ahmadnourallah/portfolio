import {
    createContext,
    useReducer,
    useEffect,
    type Dispatch,
    type ReactNode
} from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    token: string;
    expiresIn: string;
}

interface ActionType {
    type: string;
    payload?: User;
}

interface AuthContextInterface {
    user: User;
    dispatch: Dispatch<ActionType>;
}

const initialUser = {} as User;

const AuthContext = createContext<AuthContextInterface>({
    user: initialUser,
    dispatch: () => {}
});

const userReducer = (user: User, action: ActionType) => {
    switch (action.type) {
        case 'LOGIN': {
            localStorage.setItem('user', JSON.stringify(action.payload));
            return { ...action.payload } as User;
        }

        case 'LOGOUT': {
            localStorage.removeItem('user');
            return {} as User;
        }

        default: {
            return user;
        }
    }
};

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, dispatch] = useReducer(userReducer, initialUser);

    useEffect(() => {
        const user = localStorage.getItem('user');

        if (user) {
            dispatch({ type: 'LOGIN', payload: JSON.parse(user) });
        }
    }, []);

    return <AuthContext value={{ user, dispatch }}>{children}</AuthContext>;
};

export { AuthContext, AuthContextProvider };
