import { useEffect, useState } from "react";

function Header () {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('useEffect is called');
    }, []);
    function handleClick () {
        setCount(count+1);
    };
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{count}</h1>
            <button onClick={handleClick}>click</button>
        </div>
    )
};

export default Header;