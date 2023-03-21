import PostsSearch from "../../modules/PostsSearch/PostsSearch";

import styles from "./posts-page.module.scss";

const PostsPage = () => {
    return (
        <div className="container">
            <h1 className="page-title">Posts page</h1>
            <PostsSearch />
        </div>
    )
}

export default PostsPage;