import React, {useEffect, useState} from "react";

const HTTPRequestComp = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setPosts(data);
    })
    }, []);
    return(
        <div>
            <ul>
                {
                    posts.map((item) =>{
                        return(
                            <li key = {item.id}>
                                ID: {item.id} <br/>
                                Title : {item.title}<br/>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default HTTPRequestComp;
