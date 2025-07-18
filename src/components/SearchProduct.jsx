import React from 'react'
import Navbar from './Navbar'

const SearchProduct = () => {
    return (
        <div>
            <Navbar/>
            <h1><center>Search Product</center></h1><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">ProductName</label>
                                <input type="text" className="form-control" />
                                <br></br>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-warning">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SearchProduct