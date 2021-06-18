import React, { useState, useCallback, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import axios from "axios";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom';



const Login = (props) => {

    const toast = useRef(null);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const history = useHistory();

    const handleOnLoginSuccess = useCallback(() => history.push('/'), [history]);

    const showSuccess = () => {
        toast.current.clear();
        toast.current.show({severity:'success', summary: 'Login erfolgreich', detail:"Sie werden nun weitergeleitet", life: 2000});
    }

    const showError = () => {
        toast.current.clear();
        toast.current.show({severity:'error', summary: 'Login Fehlgeschlagen', detail:'Bitte Eingaben überprüfen', life: 3000});
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const login= async () => {
        let loggedin = false;
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/accounts",
          }).catch(error => {
            return { error: error };
          });

        res.data.forEach(account => {
            if (account.EMail.toLowerCase() === Email.toLowerCase() && account.Password === Password)
            {
                loggedin = true;
                window.$email = Email.toLowerCase();
                showSuccess();
                sleep(3000).then(r => {
                    handleOnLoginSuccess();
                });
            }
        });

        if (!loggedin) {
            showError();
        }
    }

    return (
        <React.Fragment>
            <Toast ref={toast} />
            <div className="p-field p-grid">
                <label htmlFor="email" className="p-col-fixed" style={{width:'100px'}}>Email</label>
                <div className="p-col">
                    <InputText id="email" name="Email" value={Email} onChange={e => setEmail(e.target.value)} type="text"/>
                </div>
            </div>
            <div className="p-field p-grid">
                <label htmlFor="password" className="p-col-fixed" style={{width:'100px'}}>Password</label>
                <div className="p-col">
                    <InputText id="password" name="Password" onChange={e => setPassword(e.target.value)} type="text"/>
                </div>
            </div>
            <Button onClick={login} label="Anmelden" className="p-button-rounded p-button-secondary" />
            <Button label="Registrieren" className="p-button-rounded p-button-secondary" />
        </React.Fragment>
    );
};

export default Login;
/*export default class Login extends Component {
    
    
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
      }

    state = {
      email: null,
      password: null,
      loggedin: false,
    }

    showSuccess() {
        this.toast.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    showError() {
        this.toast.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    async login() {
        const res = await axios({
            method: "get",
            url: "http://localhost:8000/accounts",
          }).catch(error => {
            return { error: error };
          });

        res.data.forEach(account => {
            if (account.EMail.toLowerCase() === this.state.email.toLowerCase() && account.Password === this.state.password)
            {
                this.state.loggedin = true;
                window.$email = this.state.email;
                this.showSuccess();
                //await new Promise(r => setTimeout(r, 2000));
            }
        });

        if (!this.state.loggedin) {
            this.showError();
        }
    }

    render() {

        return (
            <React.Fragment>
                <Toast ref={(el) => this.toast = el} />
                <div className="p-field p-grid">
                    <label htmlFor="email" className="p-col-fixed" style={{width:'100px'}}>Email</label>
                    <div className="p-col">
                        <InputText id="email" name="email" value={this.state.email} onChange={this.handleInputChange} type="text"/>
                    </div>
                </div>
                <div className="p-field p-grid">
                    <label htmlFor="password" className="p-col-fixed" style={{width:'100px'}}>Password</label>
                    <div className="p-col">
                        <InputText id="password" name="password" onChange={this.handleInputChange} type="text"/>
                    </div>
                </div>
                <Button onClick={this.login} label="Primary" className="p-button-rounded p-button-secondary" />
                <Button label="Primary" className="p-button-rounded p-button-secondary" />
            </React.Fragment>
        );
    }
}*/