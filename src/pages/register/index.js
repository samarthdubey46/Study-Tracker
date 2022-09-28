import React, {useState} from "react";
import Header from "../../components/header";
import FormInput from "../../components/input";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password_confirm, setPasswordConfirm] = useState('')
    const [student_class, setClass] = useState('')
    const [stream, setStream] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <Header/>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <form method="POST" action="">
                                    <FormInput setValue={setUsername} value={username} label={'Username'}/>
                                    <FormInput setValue={setEmail} value={email} label={'Email'}/>
                                    <FormInput setValue={setClass} value={student_class} inputOptions={{'type': 'number'}} label={'Class'}/>
                                    <FormInput setValue={setPassword} value={password} inputOptions={{'autoComplete': 'current-password'}}
                                               label={'Password'}/>
                                    <FormInput setValue={setPasswordConfirm} value={password_confirm}
                                               inputOptions={{'autoComplete': 'current-password'}}
                                               label={'Password Confirm'}/>



                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Register
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
export default Register