import React from 'react'


const UpdateMovie = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    // const changeHandler = e => {
    //     [e.target.name]; e.target.value
    // }
    return (
        <div>
                <h2>Update Item</h2>
                {/* <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        onChange={changeHandler}
                        placeholder="name"
                        value={}
                    />
                    <div className="baseline" />

                    <input
                        type="number"
                        name="price"
                        onChange={changeHandler}
                        placeholder="Price"
                        value={}
                    />
                    <div className="baseline" />

                    <input
                        type="string"
                        name="imageUrl"
                        onChange={changeHandler}
                        placeholder="Image"
                        value={}
                    />
                    <div className="baseline" />

                    <input
                        type="string"
                        name="description"
                        onChange={changeHandler}
                        placeholder="Description"
                        value={}
                    />
                    <div className="baseline" />

                    <input
                        type="string"
                        name="shipping"
                        onChange={changeHandler}
                        placeholder="Shipping"
                        value={}
                    /> */}

                    <button>Update</button>
                {/* </form> */}
            </div>
            )
        }
        
        export default UpdateMovie
