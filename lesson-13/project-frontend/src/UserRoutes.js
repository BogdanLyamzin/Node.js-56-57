import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./modules/PrivateRoute/PrivateRoute";
import PublicRoute from "./modules/PublicRoute/PublicRoute";

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PostsPage = lazy(() => import("./pages/PostsPage/PostsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const SinglePostPage = lazy(() => import("./pages/SinglePostPage/SinglePostPage"));
const CommentsPage = lazy(() => import("./pages/CommentsPage/CommentsPage"));
const MyBooksPage = lazy(() => import("./pages/MyBooksPage/MyBooksPage"));
const MyFavoriteBooksPage = lazy(() => import("./pages/MyFavoriteBooksPage/MyFavoriteBooksPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....Load page</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/posts/:id" element={<SinglePostPage />}>
                    <Route path="comments" element={<CommentsPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/my-books" element={<MyBooksPage />} />
                    <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>

    )
}

export default UserRoutes;