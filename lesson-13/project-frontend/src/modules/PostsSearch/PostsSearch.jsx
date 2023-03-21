import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import PostList from "../../shared/components/PostList/PostList";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";

import { searchPosts } from "../../shared/api/posts";

import styles from "./posts-search.module.scss";

const PostsSearch = ()=> {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");
    const page = Number(searchParams.get("page"));

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                setStatus("pending");
                const { data } = await searchPosts(search, page);
                setItems(prevItems => [...prevItems, ...data]);
                setStatus("success");
            }
            catch ({ response }) {
                const errorMessage = response.data.message || "Cannot fetch posts";
                setError(errorMessage);
                setStatus("error");
            }
        }
        
        if(search) {
            fetchPosts()
        }
    }, [search, page])

    const updateSearch = ({ search }) => {
        setSearchParams({
            search,
            page: 1,
        })
        setItems([]);
    }

    const loadMore = () => {
        setSearchParams({
            search,
            page: page + 1,
        })
    };

    return (
        <>
            <h2 className={styles.heading}>Posts</h2>
            <PostsSearchForm onSubmit={updateSearch} />
            {status === "pending" && <p>....Loading</p>}
            {error && <p className={styles.error}>{error}</p>}
            <PostList items={items} />
            {status === "success" && !items.length && <p>Nothing found</p>}
            {Boolean(items.length) && <button onClick={loadMore} type="button">Load more</button>}
        </>
    )
}

export default PostsSearch;
