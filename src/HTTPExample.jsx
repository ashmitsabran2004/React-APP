import React, {useState, useEffect} from "react"

const HTTPExample = () => {
    const [posts, setPosts] = useState([]);
    const [resMessage, setresMessage] = useState('');
    const [errMessage, seterrMessage] = useState('');
    const fetchData = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data.users);
        setPosts(data.users);
    })
    };

    const postData = () =>{
        const newData = {
            userId: 400,
            title:"React class"
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setresMessage("Post added successfully");
            seterrMessage("");
        })
        .catch(()=> {
            seterrMessage("Post is not added!!! There is a failure");
            setresMessage("");
        })
    }
    const putData = () =>{
        const updateData = {
            userId: 400,
            title:"React class"
        }

        fetch('https://jsonplaceholder.typicode.com/posts/3', {
            method: "PUT",
            headers: {"ContentType":"application/json"},
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setresMessage("Post updated successfully");
            seterrMessage("");
        })
        .catch(()=> {
            seterrMessage("Post is not updated!!! There is a failure");
            setresMessage("");
        })
    }
    const deleteData = () =>{
        const removeData = {
            userId: 400,
            title:"React class"
        }

        fetch('https://jsonplaceholder.typicode.com/posts/3', {
            method: "DELETE",
            headers: {"ContentType":"application/json"},
            body: JSON.stringify(removeData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setresMessage("Post deleted successfully");
            seterrMessage("");
        })
        .catch(()=> {
            seterrMessage("Post is not deleted!!! There is a failure");
            setresMessage("");
        })
    }

    return(
        <div>
            <button onClick ={fetchData}>Fetch Data</button>
            <button onClick ={postData}>Post Data</button>
            <button onClick ={putData}>Put Data</button>
            <button onClick ={deleteData}>Delete Data</button>
            <p>{resMessage}</p>
            <p>{errMessage}</p>

            <ul>
                {
                    posts.map((student) =>{
                        return(
                            <li key= {student.name}>
                                firstName: {student.firstname} <br/>
                                lastName: {student.lastname} <br/>
                                Age: {student.age} <br/>
                                Gender: {student.gender} <br/>
                                email: {student.email} <br />
                                phone: {student.phone}

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )


}

export default HTTPExample;
