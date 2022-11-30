import React, {useState} from 'react';
import InputForm from '../InputForm/InputForm.js';

const BuyForm = (props) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    function onInputChange(e) {
        const inputName = e.target.name;
        const value = e.target.value;

        const newUserData = {...userData};
        newUserData[inputName] = value;
        setUserData(newUserData);
    }

    function onSubmit(e) {
        e.preventDefault();
        props.onSubmit(userData);
    }
    return (
        <form onSubmit={onSubmit}>
            <InputForm title='Nombre' nombre='name' value={userData.name} onInputChange={onInputChange} />
            <InputForm title='Email' nombre='email' value={userData.email} onInputChange={onInputChange} />
            <InputForm title='Teléfono' nombre='phone' value={userData.phone} onInputChange={onInputChange} />
            <button onClick={onSubmit}>Crear orden</button>
        </form>
    );
}
 
export default BuyForm;