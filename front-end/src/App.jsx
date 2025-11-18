import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage, { loader as articleLoader } from './pages/ArticlePage';
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

export default function App() {
    const routes = [{
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [{
            path: '/',
            element: <HomePage />
        },
        {
            path: '/about',
            element: <AboutPage />
        },
        {
            path: '/articles',
            element: <ArticlesListPage />
        },
        {
            path: '/articles/:name',
            element: <ArticlePage />,
            loader: articleLoader
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/create-account',
            element: <CreateAccountPage />
        }]
    }];

    const router = createBrowserRouter(routes);

    return (
        <RouterProvider router={router} />
    );
};