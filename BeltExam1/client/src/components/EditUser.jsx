import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")


    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setTitle(response.data.oneSingleUser.title)
            setPrice(response.data.oneSingleUser.price)
            setDescription(response.data.oneSingleUser.description)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/edit/${id}`, { title, price, description })
        .then((response) => {
            console.log(response)
            console.log(response.data)
            navigate("/")
        })
        .catch((err) => {
            console.log(err.response. data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>Edit this user:</p>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    {errors.title ? <p>{errors.title.message}</p> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    {errors.price ? <p>{errors.price.message}</p> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    {errors.description ? <p>{errors.description.message}</p> : null}
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
                <Link to={"/"}><button>Cancel</button></Link>
            </form>
        </div>
    )
}

export default Update
