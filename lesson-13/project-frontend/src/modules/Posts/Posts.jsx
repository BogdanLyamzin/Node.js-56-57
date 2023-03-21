import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostList from "../../shared/components/PostList/PostList";

import { getPosts } from "../../shared/api/posts";

import styles from "./posts.module.scss";

const Posts = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const { data } = await getPosts();
                setItems(data);
            }
            catch ({ response }) {
                const errorMessage = response.data.message || "Cannot fetch posts";
                setError(errorMessage)
            }
            finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <>
            <h2 className={styles.heading}>Posts</h2>
            {loading && <p>....Loading</p>}
            {error && <p className={styles.error}>{error}</p>}
            <PostList items={items} />
        </>
    )
}

export default Posts;
