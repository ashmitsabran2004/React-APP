import React, { useState } from "react";
import axios from 'axios';

const HTTPRequestAxios = () => {
    const [users, setusers] = useState([]);
    const [resMessage, setresMessage] = useState("");
    const [errMessage, seterrMessage] = useState("");

    const fetchData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setusers(res.data))
        .catch(err => console.log(err))
    }

    const fetchSingleData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users/3")
        .then(res => setusers([res.data]))
        .catch(err => console.log(err))
    }

    const postData = () =>{
        const newData = {
            name : "Aman",
            username : "Aman69",
            email : "aman@gmail.com"
        }

        axios.post("https://jsonplaceholder.typicode.com/users", newData)
        .then(res => {
            console.log(res.data);
            setresMessage("User created successfully")
            seterrMessage("")
        })
        .catch((err) =>{
            console.log(err);
            seterrMessage("Error in the code!!!")
            setresMessage("")
        })

    }

    const putData = () =>{
        const updateData = {
            name : "Ashmit",
            username : "Ashmit69",
            email : "Ashmit@gmail.com"
        }

        axios.put("https://jsonplaceholder.typicode.com/users/1", updateData)
        .then(res => {
            console.log(res.data);
            setresMessage("User updated successfully")
            seterrMessage("")
        })
        .catch((err) =>{
            console.log(err);
            seterrMessage("Error in the code!!!")
            setresMessage("")
        })
    }
    return(
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            <button onClick={fetchSingleData}>Fetch Single Data</button>
            <button onClick={postData}>Post Data</button>
            <button onClick={putData}>Put Data</button>
            {resMessage && <p style={{color: "green"}}>{resMessage}</p>}
            {errMessage && <p style={{color: "red"}}>{errMessage}</p>}
            <ul>
                {
                    users.map((item) =>{
                        return(
                            <li key = {item.id}>
                                ID: {item.id}<br/>
                                Name: {item.name} <br/>
                                Username: {item.username}<br/>
                                Email : {item.email}<br/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HTTPRequestAxios
