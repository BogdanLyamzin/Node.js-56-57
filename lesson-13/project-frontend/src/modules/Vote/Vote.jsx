import { useState } from "react";

import VoteBlock from "./VoteBlock/VoteBlock";
import VoteActions from "./VoteActions/VoteActions";
import VoteResult from "./VoteResult/VoteResult";

import styles from "./vote.module.scss";

const Vote = () => {
    const [state, setState] = useState({
        republicans: 0,
        democrats: 0,
    });

    const leaveVote = (name) => { // name = "democrats"
        setState(prevState => {
            const currentValue = prevState[name]; // const currentValue = prevState.democrats;

            return {
                ...prevState, // ...{republicans: 0, democrats: 0}
                [name]: currentValue + 1 // democrats: currentValue + 1
            }
            /*
             return {
                ...{republicans: 0, democrats: 0},
                democrats: currentValue + 1
            }
            */
        })
    }

    const { republicans, democrats } = state;
    const total = republicans + democrats;

    const calcPercent = (name) => {
        const value = state[name];
        if (!total) {
            return 0;
        }
        const result = Math.round((value / total) * 100);
        return result;
    }

    const democratesPercent = calcPercent("democrats");
    const republicansPercent = calcPercent("republicans");

    return (
        <div className={styles.wrapper}>
            <VoteBlock title="Leave your vote">
                <VoteActions leaveVote={leaveVote} />
            </VoteBlock>
            <VoteBlock title="Results">
                <VoteResult total={total} democratesPercent={democratesPercent} republicansPercent={republicansPercent} />
            </VoteBlock>
        </div>
    )
}

export default Vote;

/*
class Vote extends Component {
    state = {
        republicans: 0,
        democrats: 0,
    }

    calcTotal() {
        const {republicans, democrats} = this.state;
        const total = republicans + democrats;
        return total;
    }

    calcPercent(name) {
        const value = this.state[name]; 
        const total = this.calcTotal();
        if(!total) {
            return 0;
        }
        const result = Math.round((value / total) * 100);
        return result;
    }

    leaveVote = (name) => {
        this.setState(prevState => {
            const value = prevState[name];
            return {
                [name]: value + 1
            }
        })
    }

    render() {
        const total = this.calcTotal();
        
        const democratesPercent = this.calcPercent("democrats");
        const republicansPercent = this.calcPercent("republicans");

        return (
            <div className={styles.wrapper}>
                <VoteBlock title="Leave your vote">
                    <VoteActions leaveVote={this.leaveVote} />
                </VoteBlock>
                <VoteBlock title="Results">
                    <VoteResult total={total} democratesPercent={democratesPercent} republicansPercent={republicansPercent} />
                </VoteBlock>
            </div>
        )
    }
}
*/
