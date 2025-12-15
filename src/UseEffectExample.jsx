import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [like, setLike] = useState(0);
    const [value, setValue] = useState("React");

    useEffect(() => {
        console.log('Value changed to:', value);
    }, [value]);
    const changeLike = () => {
        setLike((pre) => pre + 1);
    }
    return (
        <div>
            <h1>Likes: {like}</h1>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type something..."
            />
            <button onClick={changeLike}>Like</button>
        </div>
    )
}
export default UseEffectExample;
