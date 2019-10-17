import React, { useState, useEffect } from 'react'


const UpdateMovie = (props) => {
    const intake = {
        title: "", 
        director: "", 
        metascore: "", 
        stars: ""
    }
    const [form, setForm] = useState(intake)
    const handleSubmit = e => {
        e.preventDefault()
    }
    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'title') {
          value = parseInt(value, 10);
        }
    return (
        <div>
                <h2>Update Item</h2>
               <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        onChange={changeHandler}
                        placeholder="title"
                        value={props.title}
                    />
                    <input
                        type="text"
                        name="director"
                        onChange={changeHandler}
                        placeholder="Director"
                        value={props.director}
                    />
                    <input
                        type="number"
                        name="metascore"
                        onChange={changeHandler}
                        placeholder="metascore"
                        value={props.metascore}
                    />
                    <input
                        type="string"
                        name="star"
                        onChange={changeHandler}
                        placeholder="Star"
                        value={props.star}
                    />
                
                    <button>Update</button>
                </form>
            </div>
            )
        }
        
        export default UpdateMovie