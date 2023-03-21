import { Link, useLocation } from "react-router-dom";

import styles from "./post-list.module.scss";

const PostList = ({ items = [] }) => {
    const location = useLocation();
    
    const elements = items.map(({ id, title, body }) => (
        <li key={id} className={styles.item}>
            <Link to={`/posts/${id}`} state={{from: location}} className={styles.itemTitle}>{title}</Link>
            <p>{body}</p>
        </li>
    ))

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default PostList;