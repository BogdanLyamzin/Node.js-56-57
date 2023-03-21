const VoteActions = ({ leaveVote }) => {
    return (
        <>
            <button onClick={() => leaveVote("republicans")}>Republicans</button>
            <button onClick={() => leaveVote("democrats")}>Democrats</button>
        </>
    )
}

export default VoteActions;
