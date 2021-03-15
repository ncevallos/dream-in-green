import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../states/userState';
import Alert from 'react-bootstrap/Alert';
import logoImg from '../images/dig-logo.png';

const LogIn = () => {
  //same logic as sign up except function called
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const redirect = useHistory();

  async function handleLogIn(event) {
    event.preventDefault();

    if (passwordRef.current.value === '' || emailRef.current.value === '') {
      return setError('Please fill in all fields');
    }

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      redirect.push('/');
    } catch (e) {
      setError('Failed to sign in');
      setLoading(false);
    }
  }

  return (
    <div className='log-in-container fancy-bg'>
      <Form onSubmit={handleLogIn} className='log-in-form'>
        <div className='form-group mb-2'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={logoImg}
              className='log-in-logo'
              alt='Dream In Green logo'
            />
          </div>
          <h2 className='mb-2 text-center font-weight-bold log-in-title'>
            Log in
          </h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form.Control
            type='email'
            className='form-control mb-2'
            placeholder='Email'
            ref={emailRef}
          />
          <Form.Control
            type='password'
            className='form-control mb-2'
            placeholder='Password'
            ref={passwordRef}
          />
          <div className='text-center'>
            <button
              type='submit'
              disabled={loading}
              className='btn btn-primary my-2 mx-auto py-3 px-5'
            >
              Log In
            </button>
          </div>
          <div className='text-center'>
            Need an account? <Link to='/sign-up'>Sign Up</Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LogIn;
