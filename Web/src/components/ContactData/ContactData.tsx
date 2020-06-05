import React, { useContext, ChangeEvent, useState } from 'react';
import contextCreatePoint from '../../pages/CreatePoint/context'

const ContactData: React.FC = () => {

    const context = useContext(contextCreatePoint)

    const [inputsValues, setinputsValues] = useState({
        name:'',
        email:'',
        whatsapp:''
    })

    function handleInputChange(event:ChangeEvent<HTMLInputElement>){
        const { name, value} = event.target
        setinputsValues({...inputsValues, [name]: value})
        switch(name){
            case 'name':{context.name = value; break;}
            case 'email':{context.email = value; break;}
            case 'whatsapp':{context.whatsapp = value; break;}
        }

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