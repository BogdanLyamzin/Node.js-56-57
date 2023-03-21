import styles from "./my-books-block.module.scss";

const MyBooksBlock = ({title, children}) => {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            {children}
        </div>
    )
}

export default MyBooksBlock;