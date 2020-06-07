import React, { ChangeEvent } from 'react';
import { contactDataStateI } from "../../interfaces/appInterfaces";

const ContactData: React.FC<contactDataStateI>= ({ data, setData }) => {

    function handleInputChange(event:ChangeEvent<HTMLInputElement>){
        const { name, value} = event.target
        setData({...data, [name]: value})
    }
    return (
        <fieldset>
            <legend>
                <h2>Dados</h2>
            </legend>
            <div className="field">
                    <label htmlFor="name" >Nome da Entidade</label>
                    <input type="text" name="name" id ="name" onChange={handleInputChange} required/>
            </div>
            <div className="field-group">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id ="email" onChange={handleInputChange} required/>
                    </div>
                    <div className="field">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" name="whatsapp" id ="whatsapp" onChange={handleInputChange} required/>
                    </div>
            </div>
        </fieldset>
    )
}

export default ContactData;