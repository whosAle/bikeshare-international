import React from 'react';
import { Form, Message, Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react'

const LoginForm = (props) => {

  return (
    <div id="login-form">
      <form>
        <input placeholder="Enter Your Name!" name="name"/>
        <br/>
        <input type='submit' value="Sign In!" />
      </form>
    </div>
  )
}

export default LoginForm

// <Form>
//   <Form.Group widths='equal'>
//     <Form.TextField onChange={(e, target) => this.props.onCityClick(e, target)} placeholder='Enter Your Username' />
//   </Form.Group>
// </Form>