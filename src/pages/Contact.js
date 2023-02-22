//import { findAllByAltText } from '@testing-library/react';

import CV from "../assets/images/salis2.jpg"

//import CV from "../assets/images/salisu2.jpg"

import { useState } from "react";

const styles = {
  header: {
    textAlign: "center",
    margin: "20px 0",
  },
  submitBtn: {
    backgroundColor: "#0f4c5c",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "25px",
  },

  h2: {
    textAlign:'left',
    color: "#fb8b24",
    marginTop: "15px",
   
  },

  success: {
    textAlign: "center",
    color: "#fb8b24",
    marginTop: "15px",
  },
};

function Contact() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "ec3e6af4-0909-4a26-8a00-14774eb30714",
  });

  const handleChange = (event) => {
    //console.log(event.target.value);

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData);

    // const formData = new FormData(form);
    // const object = Object.fromEntries(formData);
    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <section className='container'>
      <h1 id="contact" style={styles.header}>
        Contact Me

      </h1>

      <h2 style={styles.h2}>
        Salisu Isah

      </h2>

        {/* <p>Name: {formData.name}</p>
        <p>Email:  {formData.email}</p>
        <p>Message:  {formData.message}</p> */}

        <p>
  
       <a href={CV} download >Download CV</a>
  
     </p>

    {/* <p>
  
       <a href={CV} download className="btn">Download CV</a>
  
     </p> */}

     {/* <p>
  
       <a href={CV} download className="btn">Linkedln</a>
  
     </p>

     <p>
  
       <a href={CV} download className="btn">Github</a>
  
     </p> */}

     <p><a style={styles.success} href="https://github.com/isahsalisu"><b>Github </b>: Salisu Isah</a></p><p><a style={styles.success} href="www.linkedin.com/in/shirleyama"><b>LinkedIn </b>Salisu Isah</a></p>



    
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


      {success && <p style={styles.success}>Form Submitted Successfully!</p>}
      </section>
    </>
  );
}

export default Contact;
