import { useState } from 'react';

function LikeCounter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 10);

    const decrement = () => setCount(count - 10);

    return (
        <div>
            <p>{count}</p>
            <button className="counter-button" onClick={increment}>Like</button>
            <button className="counter-button" onClick={decrement}>DisLike</button>
        </div>
    );
}

export default LikeCounter;