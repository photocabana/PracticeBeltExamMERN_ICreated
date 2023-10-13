import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/new`, { title, price, description })
        .then(response => {
            console.log(response)
            navigate("/")
        })
        .catch(err => {
            console.log(err.response)
            setErrors(err.response.data.error.errors)
        })
    }

    return (
        <div className="container">
            <div className="row">
            <div className="col-12">
                <p className="purple-text">Add a new user:</p>
                <form onSubmit={handleSubmit}>
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
            </div>
        </div>
    )
}

export default Form
