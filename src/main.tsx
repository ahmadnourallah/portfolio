import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContextProvider';
import { ToastContainer } from 'react-toastify';
import RootLayout from './components/layouts/RootLayout';
import PortfolioPage from './components/pages/PortfolioPage';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/pages/BlogPostPage';
import NotFound from './components/common/NotFound';
import LoginPage from './components/pages/LoginPage';
import AuthGuard from './components/common/AuthGuard';
import UnAuthGuard from './components/common/UnAuthGuard';
import LogoutPage from './components/pages/LogoutPage';
import CreateBlogPostPage from './components/pages/CreateBlogPostPage';
import EditBlogPostPage from './components/pages/EditBlogPostPage';
import ContactPage from './components/pages/ContactPage';
import './index.css';

const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } }
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastContainer limit={1} position="bottom-right" />
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<NotFound />} />

                        <Route element={<RootLayout />}>
                            <Route index element={<PortfolioPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route
                                path="/blog/:postId"
                                element={<BlogPostPage />}
                            />

                            <Route element={<AuthGuard />}>
                                <Route
                                    path="/blog/new"
                                    element={<CreateBlogPostPage />}
                                />

                                <Route
                                    path="/blog/:postId/edit"
                                    element={<EditBlogPostPage />}
                                />
                            </Route>
                        </Route>

                        <Route element={<UnAuthGuard />}>
                            <Route path="/login" element={<LoginPage />} />
                        </Route>

                        <Route path="/logout" element={<LogoutPage />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </AuthContextProvider>
    </StrictMode>
);
