import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../App.css";

const DisplayAll = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
            .then(response => {
                console.log(response)
                setAllUsers(response.data.allUsers)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [])

    const handleDeleteUser = (idFromBelow) => {
    axios.delete(`http://localhost:8000/api/delete/${idFromBelow}`)
        .then((response) => {
        console.log("Your User deletion was complete")
        console.log(response)
        const filteredUsers = allUsers.filter((user) => {
            return user._id !== idFromBelow})
        setAllUsers(filteredUsers)})
        .catch((err) => {
        console.log("error deleting user", err.response)
        })
    }

    return (
    <div className="container">
        <div className="row">
        <div className="col-12">
            <table className="table">
            <thead>
                <tr>
                <th scope="col">User</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {allUsers.map((user) => {
                return (
                    <tr key={user._id}>
                    <td>{user.title}</td>
                    <td>{user.price}</td>
                    <td>{user.description}</td>
                        <td>
                            <Link to={`/edit/${user._id}`}> <button className="btn btn-primary">Edit</button> </Link>
                            <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                )
                })}
            </tbody>
            </table>
        </div>
        </div>
    </div>
    )
}

export default DisplayAll
