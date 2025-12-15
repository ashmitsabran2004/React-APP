
import React, { useEffect, useState } from 'react';
const UseEffectExample2 = () => {
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        console.log('Password visibility changed:', isVisible);
    }, [isVisible]);
    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    }
    return (
        <div>
            <h1>Password Input</h1>
            <input
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <button onClick={toggleVisibility}>
                {isVisible ? "Hide" : "Show"}
            </button>
        </div>
    )
}
export default UseEffectExample2;
