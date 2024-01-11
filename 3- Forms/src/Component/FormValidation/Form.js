import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            phone: '',
            email: '',
            submit: false,
            register: false
        }
    }

    usernameHandler(event) {
        this.setState({
            username: event.target.value
        });
    }

    phoneHandler(event) {
        this.setState({
            phone: event.target.value
        });
    }

    emailHandler(event) {
        this.setState({
            email: event.target.value
        });
    }

    submitHandler(event) {
        event.preventDefault()
        this.setState({
            submit: true
        });
        if (this.state.username.length >= 3 && this.state.phone.length === 11 && this.state.email.length > 0) {
            this.setState({
                register:  true
            })

            setTimeout(() => {
                this.setState({
                    register:  false
                })
            }, 3000);
        }
    }

    render() {
        return (
            <div className='form-box'>
                
                {this.state.submit && this.state.register && (
                    <h4 className='form-registerd'>congrajulation, you registerd</h4>
                )}

                <form className='form' action="" onSubmit={(event) => this.submitHandler(event)}>
                    <div className="form-parent-input">
                        <input type="text" value={this.state.username} onChange={(event) => this.usernameHandler(event)} name="username" id="username" className='input' placeholder='Enter Your Name' />
                        {this.state.submit && this.state.username.length < 3 && (
                            <span className='error'>please enter your name</span>
                        )}
                    </div>
                    <div className="form-parent-input">
                        <input type="text" value={this.state.phone} onChange={(event) => this.phoneHandler(event)} name="phone" id="phone" className='input' placeholder='Enter Your Phone' />
                        {this.state.submit && this.state.phone.length < 11 && (
                            <span className='error'>please enter your phone</span>
                        )}
                    </div>
                    <div className="form-parent-input">
                        <input type="text" value={this.state.email} onChange={(event) => this.emailHandler(event)} name="email" id="email" className='input' placeholder='Enter Your Email' />
                        {this.state.submit && this.state.email.length === 0 && (
                            <span className='error'>please enter your email</span>
                        )}
                    </div>
                    <input type="submit" value={'submit'} className='submit' />
                </form>
            </div>
        )
    }
}
