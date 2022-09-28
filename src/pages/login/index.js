import React, {useState} from "react";
import Header from "../../components/header";
import FormInput from "../../components/input";

const Login = ({setLoggedIn}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = (event) => {
        setLoggedIn(true)
    }
    return (
        <div>
            <Header/>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <form onSubmit={(e) => login(e)} method="" action="">
                                    <FormInput setValue={setEmail} value={email} label={'Email'}/>
                                    <FormInput setValue={setPassword} value={password}
                                               inputOptions={{'autoComplete': 'current-password'}}
                                               label={'Password'}/>

                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember"
                                                       id="remember"/>

                                                <label className="form-check-label" htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>

                                            <a className="btn btn-link" href="">
                                                Forgot Your Password?
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login