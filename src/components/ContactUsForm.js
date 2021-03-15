import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import contactUsFormImg from '../images/contact-us-image.svg';



const ContactUsForm = () => {

  //Variables and setters methods for email contact form
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  /*
    Once submit button is clicked, this method is executed
    which calls the sendFeedback method with the templateID and message body, 
    email, and name of the student
  */
  const handleSubmit = (e) =>{
    e.preventDefault();
    const templateId = 'template_pq2t8bg'; //id of the email template being used

    console.log(message + " " + email + " " + name);
    sendFeedback(templateId, {
      message: message,
      name: name,
      email: email
    })


  };


/*
  This method sends the contents of the contact form to the email
  attached to the emailJS account. 
*/
 const sendFeedback = (templateId, variables) => {
    emailjs.send('gmail', templateId, variables, 'user_cs0YJGgLFrjMgS8qwY6gg')
    .then(res => {
      console.log("Succesfully sent email: " + res)

    })
    .catch(e => {
      console.log("Error sending email: " + e);
    })

    document.getElementById("Form").reset(); //resets contact form text to empty
  }



  


  return (
    <Row className='home-row'>
      <div className='col-lg-6'>
        <div className='hero-img-left'>
          <img
            src={contactUsFormImg}
            className='fluid-img'
            alt='Woman holding envelope'
          />
        </div>
      </div>
      <div className='col-lg-6'>
        <h1 className='display-4 font-weight-bold mb-3'>Contact Us</h1>
        <Form id="Form">
          <Form.Group controlId='formGroupName'>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Enter Name'
              onChange={(e) => 
                setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' 
              placeholder='Enter email' 
              onChange={(e) => setEmail(e.target.value)}  
            />
          </Form.Group>

          <Form.Group controlId='formGroupMessage'>
            <div className='form-group'>
              <label htmlFor='exampleFormControlTextarea1'>Message</label>
              <textarea
                className='form-control'
                id='ormGroupMessage'
                rows='5'
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </Form.Group>
        </Form>
        <div className='text-center'>
          <Button
            variant='primary'
            type='submit'
            className='my-2 my-lg-0 py-3 px-5'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </Row>
  );
};

export default ContactUsForm;
