import styles from "./vote-block.module.scss";

const VoteBlock = ({title, children}) => {
    console.log(children);    return (
        <div className={styles.block}>
            <h3 className={styles.blockTitle}>{title}</h3>
            {children}
        </div>
    )
}

export default VoteBlock;