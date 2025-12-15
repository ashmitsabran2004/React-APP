import React, {useRef, useEffect} from 'react'
const UseRefExample2 = () => {

    const [val, setVal] = useState('');
    const preRef = useRef('');
    const renderValue = useRef


    return (
        <div>
            <input type="text" ref={preRef} value = {val} onChange ={(a) => setVal(a.target.value)} />
            <h2>Current Value : {Val} </h2>
            <h2>Previous Value : {preRef.current}</h2>
            <h2>
                Rendering number : {renderValue.current}
            </h2>
        </div>
    )
}
