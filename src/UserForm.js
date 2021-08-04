import React, { Component } from 'react'

export default class UserForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name : "Harshit",
            password : "Harshit@2000",
            address : "B/40 Harikrishan soci, thakkarbapanagar, Ahmedabad"
        }
    }
    
    handleChange = (e) => {
        this.setState( { [e.target.name] : e.target.value } )
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Name : <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Password : <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <br />
                    <label>
                        Address : <textarea name="address" value={this.state.address} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <br />
                </form>
            </div>
        )
    }
}
