import React,{useState} from 'react';
import './Form.css';

const Form2 = () =>{
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        qua: ''
    });
    

    const imputEvent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name; 
        
        // OR

        const {value, name} = event.target; // object destructuring

        setFullName((preValue)=>{
            // if (name === "fname"){
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     };
            // }
            // else if (name === "lname"){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     };
            // }
            // else if (name === "email"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone
            //     };
            // }
            // else if (name === "phone"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value
            //     };
            // }

            //OR

            return{
                ...preValue,
                [name]: value
            }
        });   
    };

    const onsubmits = (event) =>{
        event.preventDefault();
        alert('form submitted');
    };

    return(
        <>
            <form onSubmit={onsubmits}>
                <div>
                    <h1>Hello {fullName.fname} {fullName.lname}</h1>
                    <p>{fullName.email} </p>
                    <p>{fullName.phone} </p>
                    <p>{fullName.qua}</p>
                    <input 
                    type="text" 
                    name='fname' 
                    placeholder="Enter Your First Name" 
                    onChange={imputEvent} 
                    value={fullName.fname} 
                    autoComplete='off'
                    />
                    <input 
                    type="text" 
                    name='lname' 
                    placeholder="Enter Your Last Name" 
                    onChange={imputEvent} 
                    value={fullName.lname} 
                    />
                    <input 
                    type="email" 
                    name='email' 
                    placeholder="Enter Your Email" 
                    onChange={imputEvent} 
                    value={fullName.email}
                    autoComplete='off' 
                    />
                    <input 
                    type="number" 
                    name='phone' 
                    placeholder="Enter Your Phone No" 
                    onChange={imputEvent} 
                    value={fullName.phone} 
                    />
                    <input 
                    type="text" 
                    name='qua' 
                    placeholder="Enter Your Qualification" 
                    onChange={imputEvent} 
                    value={fullName.qua}
                    autoComplete='off' 
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form2;