import { useState, useEffect, useRef } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    const timerId = useRef(0);

    useEffect(()=> {
        return ()=> reset();
    }, [])

    const start = () => {
        if(!timerId.current) {
            timerId.current = setInterval(() => {
                setTime(prevState => prevState + 1);
            }, 1000);
        }
    }

    const stop = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
    }

    const reset = ()=> {
        stop();
        setTime(0);
    }

    return (
        <div>
            <div>
                <button onClick={start} type="button">Start</button>
                <button onClick={stop} type="button">Stop</button>
                <button onClick={reset} type="button">Reset</button>
            </div>
            <div>{time}</div>
        </div>
    )
}

export default Timer;