import cssStyle from './App.module.css';
import React, { Component } from 'react';
import User from "./User";
import UserForm from "./UserForm";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value : "Hello controlled",
      link : "http://www.google.com"
    }
  }
  
  handleChange = (event) => {
    this.setState({ value : event.target.value })
  }

  render() {
    return (
      <>
        <h1 className={cssStyle.h1}>Hello My name is Harshit</h1>
        <form>
          Controlled component : <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
      </>
    )
  };
}

function RenderAll() {
  return(
    <>
      <App />
      <User />
      <UserForm />
    </>
  );
} 

export default RenderAll;
