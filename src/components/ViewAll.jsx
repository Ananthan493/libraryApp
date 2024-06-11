import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8083/view").then(
            (response) => {
                changeData(response.data)

            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Published Year</th>
                                    <th scope="col">Author Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Edition</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(

                                        (value, index) => {
                                            return <tr>
                                                <td>{value.Title}</td>
                                                <td>{value.Category}</td>
                                                <td>{value.PublishedYear}</td>
                                                <td>{value.AuthorName}</td>
                                                <td>{value.Description}</td>
                                                <td>{value.Price}</td>
                                                <td>{value.Edition}</td>
                                            </tr>

                                        }
                                    )   
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll