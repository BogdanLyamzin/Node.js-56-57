import styles from "../vote.module.scss";

const VoteResult = ({ total, democratesPercent, republicansPercent }) => {
    return (
        <>
            <p>Total votes: {total}</p>
            <p>Republicans: {republicansPercent}%</p>
            <p>Democrats: {democratesPercent}%</p>
        </>
    )
}

export default VoteResult;