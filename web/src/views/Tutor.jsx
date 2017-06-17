import React, { Component } from "react";
import { Button, Form, Input } from 'semantic-ui-react';

class Tutor extends Component {
  state = {
    loading: false,
    firstname: 'Alex'
  }
  render() {
    return (
      <div className="tutorContainer">
      <div className="tutor">
        <h2 className="header">Hey there, {this.state.firstname}. Welcome to Tutor!</h2> Please input a subject you would like to tutor, or hit 'skip', if you do not plan on tutoring for now.
        <br/>
        <Form action="submit">
          <Form.Field>
            <label>Subject</label>
            <Input type="text"/>
          </Form.Field>
          <Form.Field>
            <label>Description of experience</label>
            <Input type="text"/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        <Button type='submit'>skip</Button>
        </Form>
        </div>
      </div>
    );
  }
}

export default Tutor;
