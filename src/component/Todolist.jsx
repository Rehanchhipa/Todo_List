import React, { useState } from 'react'
import './Todolist.css'

function Todolist() {

    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [list, setList] = useState([])

    const handleOnAdd = () => {
        if (text !== "") {
            setList([...list, text])
            setText("")
        }
    }

    const handleOnRemove = (mess)=>{
        let newList = list.filter((index, value)=>{
            return value !== mess
        })
        setList(newList)
    }

    return (
        <>
            <div className='container bg-dark h-100'>
                <div className='row'>
                    <div className="col-10 col-md-6 col-lg-4 mx-auto my-5 pb-4 bg-warning">
                        <h1 className='text-center bg-light my-4 hi'>TodoList</h1>
                        <input className='w-75' type="text" onChange={handleOnChange} value={text} />
                        <button onClick={handleOnAdd} className='border-0 bg-transparent ms- fw-bolder add'><i className="fa-solid fa-circle-plus"></i></button>
                        <div className='my-3'>
                        {list.map((index, value) => {
                            return (
                                <p className='fw-bold w-100' key={value}><span className='close' onClick={()=>{handleOnRemove(value)}}><i className="fa-solid fa-circle-xmark me-3 ms-1"></i></span>{index}</p>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todolist;