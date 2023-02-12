//import { findAllByAltText } from '@testing-library/react';

import {useState} from 'react'



const styles = {
    header: {
        textAlign: 'center',
        margin: '20px 0'
    },
    submitBtn: {
        backgroundColor: 'lightseagreen',
        color: '#fff',
        cursor: 'pointer'
    },

    success: {
        textAlign: 'center',
        color: 'lightseagreen',
        marginTop: '15px'
        
    }
};


function Contact() {
    const [success, setSuccess]   = useState(false);
    const [formData, setFormData] = useState({

    name: '',
    email: '',
    message: '',
    access_key: 'ec3e6af4-0909-4a26-8a00-14774eb30714'
    
})

const handleChange = (event) => {
    //console.log(event.target.value);

    setFormData({
     ...formData,
     [event.target.name]: event.target.value

    });
};


    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formData);

        // const formData = new FormData(form);
        // const object = Object.fromEntries(formData);
        const data = JSON.stringify(formData);
       

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data
        })
          .then(res =>res.json())
          .then(data => {
            setSuccess(true);
            setFormData({
                ...formData,
                name:'',
                email:'',
                message:''

            })

            setTimeout(() => {

                setSuccess(false);
            }, 3000)
        

          })
          .catch(err => console.log(err));
          
    };


return (
<>
<h1 id="contact" style={styles.header}>Contact Me</h1>

        <p>Name: {formData.name}</p>
        <p>Email:  {formData.email}</p>
        <p>Message:  {formData.message}</p>
    
    <form onSubmit={handleSubmit}>
            <input 
            name='name'
            value={formData.name} 
            onChange={handleChange}  
            type='text'
             placeholder='Enter Your Name' />
            <input
             name='email'
             value={formData.email} 
              onChange={handleChange}
               type='text'
                placeholder='Enter Your Email Address' />
            <textarea 
            
            name='message'
            value={formData.message}
             onChange={handleChange}
            placeholder='Enter your message...'
             cols='30' rows='10'></textarea>
            <button style={styles.submitBtn}>Submit</button>
    </form>

    {success && <p style= {styles.success}>Form Submitted Successfully!</p>}
    </>
    )

}

export default Contact;