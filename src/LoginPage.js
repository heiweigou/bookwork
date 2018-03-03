/**
 * Created by jiaow on 24/02/2018.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Isemail from 'isemail'
import passwordValidator from 'password-validator'
import Search from './Search'
class LoginPage extends React.Component {

    constructor() {

        super();
        this.state = {
            data: {
                email: '',
                password: '',
            },
            error: {   email: ''
                , password: []},

        }
    }

    onChange = (e) => {

        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        })


    }

    onSubmit = (e) => {
        e.preventDefault();
        const error = this.validator();
        //setState is ASYNCHRONOUS
        this.setState({error: error})

    }


    validator (){
        const error = {
            email: ''
            , password: []
        };
        const schema = new passwordValidator();

        schema.is().min(8)
            .is().max(10)
            .has().uppercase()
            .has().lowercase()
            .has().digits();
        const passError = schema.validate(this.state.data.password, {list: true});
        if (!Isemail.validate(this.state.data.email)) {
            error.email = 'email is invalid'
        }

        if (!this.state.data.password){
            error.password.push('password is empty')
        }
        else {
            passError.forEach(function (value) {

                if (value === 'min')
                    error.password.push('password is too short')
                if (value === 'max')
                    error.password.push('password is too long')
                if (value === 'uppercase')
                    error.password.push('password needs uppercase')
                if (value === 'lowercase')
                    error.password.push('password needs lowercase')
                if (value == 'digits')
                    error.password.push('password must have digits')
            })
        }

        return error
    }

    render() {
        return (

            <div className="container">
                <h1>this is login page</h1>
                <Link to="/">home</Link>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email</label>
                        <input name="email" type="email" onChange={this.onChange} value={this.state.data.email}
                               className={!!this.state.error.email?'form-control is-invalid':'form-control is-valid'} placeholder="example@hotmail.com"/>
                       <span className="text-danger">{this.state.error.email}</span>

                    </div>

                    <div className="form-group">
                        <label>password</label>
                        <input type="password" value={this.state.data.password} onChange={this.onChange} name="password"
                               className={this.state.error.password.length>0?'form-control is-invalid':'form-control is-valid'}/>
                        {
                            this.state.error.password&&this.state.error.password.map((item)=>{
                                return (<span className="text-danger d-block">{item}</span>)
                            })

                        }

                    </div>
                    <input type="submit" className={'btn btn-primary'} value='submit'/>


                </form>
                <Search/>

            </div>

        )
    }

}

export default LoginPage;