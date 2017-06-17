import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Header,
} from 'semantic-ui-react';
 
 //first name, last name, email, password, linkedin ?
class Register extends Component {
  render() {
    return (
      <div className='auth-container'>
        <Header as='h2' className="auth-header">Register</Header>
        <Form className='register-form'>
          <Form.Field>
            <label>First Name</label>
            <Input placeholder='First Name' required/>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input placeholder='Last Name' required/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input placeholder='Email' type="email" required />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input placeholder='Password' type="password" required/>
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <Input placeholder='Password' type="password" required/>
          </Form.Field>
          <Form.Field>
            <Button className='register-button' type='submit'>Submit</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}
 
export default Register;
