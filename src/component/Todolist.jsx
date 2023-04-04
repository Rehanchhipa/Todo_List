import React, { useState, useEffect } from 'react'
import './Todolist.css'
import { RiCloseCircleLine } from 'react-icons/ri';
import { GrUpdate } from 'react-icons/gr'
import { AiTwotoneEdit } from 'react-icons/ai'


function Todolist() {



    document.body.style.backgroundColor = "#212529";
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [list, setList] = useState([])



    useEffect(() => {
        const data = localStorage.getItem("todo_list")
        const data1 = JSON.parse(data)
        setList(data1)
        console.log(data1)
    }, [])


    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("todo_list", JSON.stringify(list))
        }, 100)
    }, [list])

    const handleOnAdd = () => {

        if (text !== "") {
            if (btnicon === true) {

                list[value] = text
                setText("")
                setList([...list])
                setBtnicon(false)
            }
            else {
                setList([...list, text])
                setText("")
            }
            
        }

    }

    const handleOnRemove = (mess) => {
        let newList = list.filter((index, value) => {
            return value !== mess
        })
        setList(newList)
    }

    const handleOnUpdate = (mess1) => {

        let data = list.findIndex((index, value) => {
            return index === mess1
        })
        setValue(data)
        setText(mess1)
        setBtnicon(true)
    }

    const [btnicon, setBtnicon] = useState(false)
    const [value, setValue] = useState(null)



    return (
        <>
            <div className='container bg-dark h-100'>
                <div className='row'>
                    <div className="col-10 col-md-10 col-lg-4 mx-auto my-5 pb-4 bg-warning">
                        <h1 className='text-center bg-light my-4 hi'>TodoList</h1>
                        <input className='w-75' type="text" onChange={handleOnChange} value={text} />
                        <span onClick={handleOnAdd} className='ms-2'>
                            {btnicon === true ?
                                <AiTwotoneEdit />
                                :
                                <i className="fa-solid fa-circle-plus ms-2"></i>}
                        </span>



                        <div className='my-3' id='input'>

                            {list.map((index, value) => {
                                return (
                                    <p className='fw-bold w-100' key={value}><span className='close me-2' onClick={() => { handleOnRemove(value) }}><RiCloseCircleLine /> </span> <span onClick={() => handleOnUpdate(index)} className='me-2'><GrUpdate /></span>{index}</p>
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