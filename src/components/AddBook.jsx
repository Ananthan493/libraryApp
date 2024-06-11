import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBook = () => {
    const [data, setData] = useState(
        {
            "Title": "",
            "Category": "",
            "PublishedYear": "",
            "AuthorName": "",
            "Description": "",
            "Price": "",
            "Edition": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8083/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Registered")
                }
                else {
                    alert("Error")
                }
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Title</label>
                            <input type="text" className="input form-control" name='Title' value={data.Title} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Category</label>
                            <select name="Category" id="" className="form-control" value={data.Category} onChange={inputHandler}>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Horror">Horror</option>
                                <option value="Drama">Drama</option>
                                <option value="Biography">Biography</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Published Year</label>
                            <input type="text" className="input form-control" name='PublishedYear' value={data.PublishedYear} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Author Name</label>
                            <input type="text" className="input form-control" name='AuthorName' value={data.AuthorName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="label form-label">Description</label>
                            <textarea name="Description" id="" className="form-control" value={data.Description} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Price</label>
                            <input type="text" className="input form-control" name='Price' value={data.Price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Edition</label>
                            <input type="text" className="input form-control" name='Edition' value={data.Edition} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook