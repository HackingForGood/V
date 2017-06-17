import React, { Component } from "react";
import { Button, Form, Input } from 'semantic-ui-react';

class Tutor extends Component {
  state = {
    loading: false,
    firstname: 'Alex',
    isActive: false,
  }

  onFocus = () => {
    this.setState({isActive: true})
  }

  onBlur = () => {
    this.setState({isActive: false})
  }
  render() {
    return (
      <div className="tutorContainer">
      <div className="tutor">
        <h2 className="header">Hey there, {this.state.firstname}. Welcome to <span className="brand">Tutor!</span></h2> Please input a subject you would like to tutor, or hit 'skip', if you do not plan on tutoring for now.
        <div className="pageBreak"/>
        <Form action="submit">
          <Form.Field>
            <label>Subject</label>
            <Input type="text" onFocus={this.onFocus} onBlur={this.onBlur}/>
          </Form.Field>
          {
            this.state.isActive ? <div className="tutorSearchResults">
            <div className="singleSubj">Math</div>
            <div className="singleSubj">Science</div>
            <div className="singleSubj">Python</div>
            <div className="singleSubj">Node.js</div>
            <div className="singleSubj">Guitar</div>
          </div> : null
          }
          <div className="subjects">
            <div className="subj">selected one</div>
            <div className="subj">selected two</div>
          </div>
          <br/>
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
