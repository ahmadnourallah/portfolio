import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../common/Header';
import Footer from '../common/Footer';

const RootLayout = () => {
    return (
        <>
            <ToastContainer position="bottom-right" />
            <Header />
            <main className="overflow-hidden">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
