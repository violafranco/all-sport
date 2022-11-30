import React from 'react'

const InputForm = (props) => {
    return (
        <div >
            <label>{props.title}</label>
            <input value={props.value} name={props.nombre} type="text" onChange={props.onInputChange} required></input>
        </div>
    );
}
 
export default InputForm;