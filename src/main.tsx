import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContextProvider';
import { ToastContainer } from 'react-toastify';
import RootLayout from './components/layouts/RootLayout';
import PortfolioPage from './components/pages/PortfolioPage';
import NotFound from './components/common/NotFound';
import AuthGuard from './components/common/AuthGuard';
import UnAuthGuard from './components/common/UnAuthGuard';
import ContactPage from './components/pages/ContactPage';
import Loading from './components/common/Loading';
import './index.css';

const BlogPage = lazy(() => import('./components/pages/BlogPage'));
const BlogPostPage = lazy(() => import('./components/pages/BlogPostPage'));
const LoginPage = lazy(() => import('./components/pages/LoginPage'));
const LogoutPage = lazy(() => import('./components/pages/LogoutPage'));
const CreateBlogPostPage = lazy(
    () => import('./components/pages/CreateBlogPostPage')
);
const EditBlogPostPage = lazy(
    () => import('./components/pages/EditBlogPostPage')
);

const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } }
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastContainer limit={1} position="bottom-right" />
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <HashRouter>
                    <Routes>
                        <Route element={<RootLayout />}>
                            <Route path="*" element={<NotFound />} />
                            <Route index element={<PortfolioPage />} />
                            <Route
                                path="/blog"
                                element={
                                    <Suspense fallback={<Loading />}>
                                        <BlogPage />
                                    </Suspense>
                                }
                            />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route
                                path="/blog/:postId"
                                element={
                                    <Suspense fallback={<Loading />}>
                                        <BlogPostPage />
                                    </Suspense>
                                }
                            />

                            <Route element={<AuthGuard />}>
                                <Route
                                    path="/blog/new"
                                    element={
                                        <Suspense fallback={<Loading />}>
                                            <CreateBlogPostPage />
                                        </Suspense>
                                    }
                                />

                                <Route
                                    path="/blog/:postId/edit"
                                    element={
                                        <Suspense fallback={<Loading />}>
                                            <EditBlogPostPage />
                                        </Suspense>
                                    }
                                />
                            </Route>
                        </Route>

                        <Route element={<UnAuthGuard />}>
                            <Route
                                path="/login"
                                element={
                                    <Suspense fallback={<Loading />}>
                                        <LoginPage />
                                    </Suspense>
                                }
                            />
                        </Route>

                        <Route
                            path="/logout"
                            element={
                                <Suspense fallback={<Loading />}>
                                    <LogoutPage />
                                </Suspense>
                            }
                        />
                    </Routes>
                </HashRouter>
            </QueryClientProvider>
        </AuthContextProvider>
    </StrictMode>
);
