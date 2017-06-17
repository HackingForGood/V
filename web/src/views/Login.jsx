import React, { Component } from 'react';
import { Button, Form, Checkbox, Input, Header } from 'semantic-ui-react';

import axios from "axios";

class Login extends Component {
  state = {
    loading: false,
    password: "",
    email: "",
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post(`http://localhost:8888/api/auth/login`,{
        email: this.state.email,
        password: this.state.password,
      })
      .then(() => {
        this.setState({ loading: false });
        //window.location = "/";
      })
      .catch(err => {
        console.error('error => ', err)
      });
  };

  onChange = e => {
        const { name: fieldName, value: fieldValue } = e.target;
        this.setState({
            ...this.state.fields,
            [fieldName]: fieldValue
        });
      };
  render() {
    return (
      <div className='auth-container'>
        <Header className="auth-header" as='h2'>Sign In</Header>
        <Form className='login-form' onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Email</label>
            <Input name="email" placeholder='Email' type='email' required onChange={this.onChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input name="password" placeholder='Password' type="password" required onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Remember Me' />
          </Form.Field>
          <Button type='submit'>{this.state.loading ? 'Signing In...' : 'Submit'}</Button>
        </Form>
      </div>
    );
  };
}

export default Login