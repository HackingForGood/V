import React, { Component } from "react";
import { Form, Input, Button, Header } from "semantic-ui-react";

import axios from "axios";

//first name, last name, email, password, linkedin ?
class Register extends Component {
  state = {
    loading: false,
    password: "",
    confirmPassword: "",
    email: "",
    firstname: "",
    lastname: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post(`http://localhost:8888/api/auth/register`,{
        email: this.state.email,
        firstName: this.state.firstname,
        lastName: this.state.lastname,
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
      <div className="auth-container">
        <Header as="h2" className="auth-header">Register</Header>
        <Form className="register-form" onSubmit={this.onSubmit}>
          <Form.Field>
            <label>First Name</label>
            <Input name="firstname" placeholder="First Name" required onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input name="lastname" placeholder="Last Name" required onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input name="email" placeholder="Email" type="email" required onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input name="password" placeholder="Password" type="password" required onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <Input name="confirmPassword" placeholder="Password" type="password" required onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <Button className="register-button" type="submit">{this.state.loading ? 'Registering...' : 'Submit'}</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default Register;
