import { useState, useEffect } from "react";

const TimerWithDisable = () => {
    const [time, setTime] = useState(0);
    const [timerId, setTimerId] = useState(0);

    useEffect(()=> {
        return ()=> reset();
    }, [])

    const start = () => {
        if(!timerId) {
            const id = setInterval(() => {
                setTime(prevState => prevState + 1);
            }, 1000);
            setTimerId(id);
        }
    }

    const stop = () => {
        clearInterval(timerId);
        setTimerId(0);
    }

    const reset = ()=> {
        stop();
        setTime(0);
    }

    return (
        <div>
            <div>
                <button onClick={start} disabled={Boolean(timerId)} type="button">Start</button>
                <button onClick={stop} type="button">Stop</button>
                <button onClick={reset} type="button">Reset</button>
            </div>
            <div>{time}</div>
        </div>
    )
}

export default TimerWithDisable;