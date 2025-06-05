import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const RootLayout = () => {
    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
