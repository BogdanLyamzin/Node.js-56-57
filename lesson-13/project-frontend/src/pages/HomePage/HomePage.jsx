import Posts from "../../modules/Posts/Posts";

import styles from "./home-page.module.scss";

const HomePage = () => {
    return (
        <div className="container">
            <h1 className="page-title">Home page</h1>
            <Posts />
        </div>
    )
}

export default HomePage;