import React, { Component } from 'react';
import { Button, Form, Checkbox, Input, Header } from 'semantic-ui-react';

class Login extends Component {
  
  render() {
    return (
      <div className='auth-container'>
        <Header className="auth-header" as='h2'>Sign In</Header>
        <Form className='login-form'>
          <Form.Field>
            <label>Email</label>
            <Input placeholder='Email' type='email' required/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input placeholder='Password' type="password" required/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Remember Me' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  };
}

export default Login